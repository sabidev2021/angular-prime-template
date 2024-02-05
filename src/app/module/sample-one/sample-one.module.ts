import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleOneListComponent } from './sample-one-list/sample-one-list.component';
import { SampleOneRoutingModule } from './sample-one-routing.module';

@NgModule({
  declarations: [
    SampleOneListComponent
  ],
  imports: [
    CommonModule,
    SampleOneRoutingModule
  ]
})
export class SampleOneModule { }
