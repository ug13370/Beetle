import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeetleComponent } from './beetle.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: BeetleComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'tasks',
        component: TasksComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: '**',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeetleRoutingModule {}
