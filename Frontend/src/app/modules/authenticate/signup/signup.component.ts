import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComparePassword } from '../../shared/customvalidator.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', []],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(5)]],
        repeatPassword: ['', [Validators.required, Validators.minLength(5)]],
      },
      {
        validator: ComparePassword('password', 'repeatPassword'),
      }
    );
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signUpForm)
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
}
