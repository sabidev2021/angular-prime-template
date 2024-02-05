import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {animation: ''}
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {animation: ''}
  },
  {
    path: 'sample-one',
    loadChildren: () => import('./module/sample-one/sample-one.module').then(m => m.SampleOneModule),
    data: {animation: ''}
  },
  {
    path: 'sample-two',
    loadChildren: () => import('./module/sample-two/sample-two.module').then(m => m.SampleTwoModule),
    data: {animation: ''}
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotfoundComponent
}
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
