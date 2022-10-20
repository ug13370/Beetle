import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './modules/authenticate/signin/signin.component';
import { SignupComponent } from './modules/authenticate/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/beetle', pathMatch: 'full' },
  {
    path: 'beetle',
    loadChildren: () =>
      import('./modules/beetle/beetle.module').then((m) => m.BeetleModule),
  },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/signup', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
