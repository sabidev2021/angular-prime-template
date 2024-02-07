import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  IModuleTranslationOptions,
  ModuleTranslateLoader,
} from '@larscom/ngx-translate-module-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

export function ModuleHttpLoaderFactory(http: HttpClient) {
  const baseTranslateUrl = './assets/i18n';

  const options: IModuleTranslationOptions = {
    // version: Date.now(), // enable versioning
    translateError: (error: any, path: any) => {
      console.log('Oeps! an error occurred: ', { error, path });
    },
    modules: [
      // final url: ./assets/i18n/en_US.json // currently
      { baseTranslateUrl },
      // final url: ./assets/i18n/sample-one/en_US.json
      // { baseTranslateUrl, moduleName: 'sample-one' },
      // final url: ./assets/i18n/sample-two/en_US.json
      // { baseTranslateUrl, moduleName: 'sample-two' },
    ],
  };
  return new ModuleTranslateLoader(http, options);
}
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: ModuleHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
