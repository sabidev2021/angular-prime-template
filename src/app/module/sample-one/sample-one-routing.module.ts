import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { SampleOneListComponent } from "./sample-one-list/sample-one-list.component";

const routers: Routes = [
  {
    path: '',
    component: SampleOneListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class SampleOneRoutingModule {
}
