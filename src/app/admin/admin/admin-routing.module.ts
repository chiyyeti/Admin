import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchComponent } from '../componets/batch/batch.component';
import { DashboardComponent } from '../componets/dashboard/dashboard.component';
import { DataComponent } from '../componets/data/data.component';
import { MentorComponent } from '../componets/mentor/mentor.component';
import { RequestComponent } from '../componets/request/request.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
  children:[
    {path:'batch',component:BatchComponent},
    {path:'mentor',component:MentorComponent},
    {path:'request',component:RequestComponent}
  ]

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
