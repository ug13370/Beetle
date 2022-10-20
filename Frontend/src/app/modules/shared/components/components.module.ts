import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../../material/material.module';
import { BeetleLogoComponent } from './beetle-logo/beetle-logo.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [BeetleLogoComponent, BoxComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [BeetleLogoComponent,BoxComponent],
  providers: [],
})
export class ComponentsModule {}

