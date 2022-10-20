import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../shared/components/components.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { AboutComponent } from './pages/about/about.component';
import { BeetleRoutingModule } from './beetle-routing.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    DashboardComponent,
    TasksComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
    BeetleRoutingModule
  ],
  providers: [],
})
export class BeetleModule {}
