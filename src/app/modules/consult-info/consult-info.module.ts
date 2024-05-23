import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ConsultInfoComponent } from './consult-info.component';
import { ConsultInfoRoutingModule } from './consult-info-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConsultInfoComponent
  ],
  imports: [
    CommonModule,
    ConsultInfoRoutingModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [DatePipe]
})
export class ConsultInfoModule { }
