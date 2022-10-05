import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [MaterialModule],
  exports: [],
  providers: [],
})
export class AuthenticateModule {}
