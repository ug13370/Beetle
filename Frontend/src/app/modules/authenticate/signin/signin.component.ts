import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComparePassword } from '../../shared/customvalidator.validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  public signInForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signInForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signInForm);
    // Check if the email and password are correct.
    // if (
    //   this.userService.validateUser(
    //     this.signInForm.value['email'],
    //     this.signInForm.value['password']
    //   )
    // ) {
    //   // Credentials entered are correct.

    //   this.wrongCredentials = false;

    //   // Navigating user to it's tasks.
    //   this.router.navigate(['/tasks']);
    // } else {
    //   // Credentials entered are wrong.

    //   this.popUpService.popUpHeading = 'Wrong credentials';
    //   this.popUpService.popUpText = 'Please enter correct credentials.';
    //   this.popUpService.popUpType = 'message';

    //   const dialogRef = this.dialog.open(PopUpComponent);
    //   dialogRef.afterClosed().subscribe(() => {});
    // }
  }

  switchToSignup() {
    this.router.navigate(['/signup']);
  }
}
