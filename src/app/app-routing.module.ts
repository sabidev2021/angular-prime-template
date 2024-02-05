import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: '',
    redirectTo: '',
    pathMatch: 'full'
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
