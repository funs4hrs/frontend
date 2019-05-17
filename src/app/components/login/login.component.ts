import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
  ){
    if (this.authService.currentUserValue) {
      this.router.navigate(['/'])
    }
  }


  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl= this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  get f() { return this.loginForm.controls}

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate([this.returnUrl])
      },
      error => {
        console.log(error)
        alert("ERROR")
        this.loading = false;
      })

  }


  // registerForm: FormGroup;
  // submitted = false;
  // user : User;

  // constructor(private formBuilder : FormBuilder, private userService: UserService) { }

  // ngOnInit() {
  //   this.registerForm = this.formBuilder.group({
  //     email: new FormControl('', Validators.compose([
  //       Validators.required,
  //       Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  //     ])),
  //     password: ['',Validators.required]
  //   })
  // }

  // get f() { return this.registerForm.controls; }

  //   async onSubmit() {
  //       this.submitted = true;

  //       // stop here if form is invalid
  //       if (this.registerForm.invalid) {
  //           return;
  //       }

  //       alert("SEND REQUEST");

  //       console.log(this.userService)

  //       this.user = await this.userService.login(this.registerForm.value.email, this.registerForm.value.password)

  //       console.log(this.user)

  //       if (this.user !== null && this.user !== undefined) {
  //         alert(`SUCCESS, welkom ${this.user.firstName}`);
  //       }

  //       //alert('SUCCESS!!\n\n' + JSON.stringify(this.registerForm.value))
  //   }

}
