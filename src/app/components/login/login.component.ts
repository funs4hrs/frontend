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

    var forge = require('node-forge')

     var md = forge.md.sha256.create();
// md.update('The quick brown fox jumps over the lazy dog');
// console.log(md.digest().toHex());
// output: d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592

    md.update(this.f.password.value)

    var hash = md.digest().toHex();
    console.log(hash)

    this.authService.login(this.f.email.value, hash)
      .pipe(first())
      .subscribe(data => {
        window.location.href = `http://${window.location.host}/home`
      },
      error => {
        console.log(error)
        alert("ERROR")
        this.loading = false;
      })

  }



}
