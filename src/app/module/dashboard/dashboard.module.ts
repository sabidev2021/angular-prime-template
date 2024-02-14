import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LangService } from 'src/app/lang/lang.service';

export function createTranslateLoader(http: HttpClient) {
  // https://stackoverflow.com/questions/65717750/angular-use-translation-from-outside-assets
  return new TranslateHttpLoader(http, './app/module/dashboard/i18n/', '.json');
}

@NgModule({
  declarations: [
    DashboardListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true,
      extend: true
    })
  ],
  providers: [
    LangService,
    TranslateService
  ]
})
export class DashboardModule { }
