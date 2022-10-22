import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { BeetleLogoComponent } from './beetle-logo/beetle-logo.component';
import { BoxComponent } from './box/box.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    BeetleLogoComponent,
    BoxComponent,
    SideNavComponent,
    HeaderComponent,
  ],
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [
    BeetleLogoComponent,
    BoxComponent,
    SideNavComponent,
    HeaderComponent,
  ],
  providers: [],
})
export class ComponentsModule {}
