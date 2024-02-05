import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleOneListComponent } from './sample-one-list/sample-one-list.component';
import { SampleOneRoutingModule } from './sample-one-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SampleOneListComponent
  ],
  imports: [
    CommonModule,
    SampleOneRoutingModule,
    TranslateModule
  ]
})
export class SampleOneModule { }
