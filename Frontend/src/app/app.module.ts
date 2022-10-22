import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthenticateModule } from './modules/authenticate/authenticate.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeetleComponent } from './modules/beetle/beetle.component';
import { ComponentsModule } from './modules/shared/components/components.module';

@NgModule({
  declarations: [AppComponent, BeetleComponent],
  imports: [
    AppRoutingModule,
    AuthenticateModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
