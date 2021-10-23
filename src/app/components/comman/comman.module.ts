import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [
    ItemCardComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgbModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    ItemCardComponent,
  ]
})
export class CommanSharedModule { }
