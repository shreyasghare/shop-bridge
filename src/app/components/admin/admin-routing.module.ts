import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  {path: '', component: AdminLandingComponent},
  {path: 'add-item', component: ItemDetailsComponent, data: { request:"add" }},
  {path: 'edit-item', component: ItemDetailsComponent, data: { request:"edit" }},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class AdminRoutingModule { }
