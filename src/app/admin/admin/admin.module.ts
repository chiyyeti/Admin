import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FooterComponent } from '../footer/footer.component';
import { SiderComponent } from '../sider/sider.component';
import { HeaderComponent } from '../header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../componets/dashboard/dashboard.component';
import { DataComponent } from '../componets/data/data.component';
import {MatMenuModule} from '@angular/material/menu';
import { BatchComponent } from '../componets/batch/batch.component';
import { MentorComponent } from '../componets/mentor/mentor.component';
import { RequestComponent } from '../componets/request/request.component';
import {MatFormFieldModule} from '@angular/material/form-field';






@NgModule({
  declarations: [
    AdminComponent,
    FooterComponent,
    SiderComponent,
    HeaderComponent,
    DashboardComponent,
    DataComponent,
    BatchComponent,
    MentorComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    RouterModule,
    MatMenuModule,
    MatFormFieldModule,
    
  ],
  exports:[   AdminComponent,
    FooterComponent,
    SiderComponent,
    HeaderComponent,
    DashboardComponent,
    DataComponent,
    BatchComponent,
    MentorComponent,
    RequestComponent]
})
export class AdminModule { }
