import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CommanSharedModule } from '../comman/comman.module';

@NgModule({
  declarations: [
    AdminLandingComponent,
    ItemDetailsComponent
  ],
  imports: [
    CommonModule,
    CommanSharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
