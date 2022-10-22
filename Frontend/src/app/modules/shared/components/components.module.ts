import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { BeetleLogoComponent } from './beetle-logo/beetle-logo.component';
import { BoxComponent } from './box/box.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [BeetleLogoComponent, BoxComponent, SideNavComponent],
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [BeetleLogoComponent, BoxComponent, SideNavComponent],
  providers: [],
})
export class ComponentsModule {}
