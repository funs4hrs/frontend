import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user : User;

  constructor(private formBuilder : FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: ['',Validators.required]
    })
  }

  get f() { return this.registerForm.controls; }

    async onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert("SEND REQUEST");

        console.log(this.userService)

        this.user = await this.userService.login(this.registerForm.value.email, this.registerForm.value.password)

        console.log(this.user)

        if (this.user !== null && this.user !== undefined) {
          alert(`SUCCESS, welkom ${this.user.firstName}`);
        }

        //alert('SUCCESS!!\n\n' + JSON.stringify(this.registerForm.value))
    }

}
