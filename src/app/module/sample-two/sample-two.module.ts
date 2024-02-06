import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleTwoRoutingModule } from './sample-two-routing.module';
import { SampleTwoListComponent } from './sample-two-list/sample-two-list.component';

@NgModule({
  declarations: [
    SampleTwoListComponent
  ],
  imports: [
    CommonModule,
    SampleTwoRoutingModule
  ]
})
export class SampleTwoModule { }
