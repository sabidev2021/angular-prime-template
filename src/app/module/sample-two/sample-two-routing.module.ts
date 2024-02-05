import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { SampleTwoListComponent } from "./sample-two-list/sample-two-list.component";

const routers: Routes = [
  {
    path: '',
    component: SampleTwoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class SampleTwoRoutingModule {
}
