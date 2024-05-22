import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultInfoComponent } from './consult-info.component';
import { ConsultInfoRoutingModule } from './consult-info-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConsultInfoComponent
  ],
  imports: [
    CommonModule,
    ConsultInfoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ConsultInfoModule { }
