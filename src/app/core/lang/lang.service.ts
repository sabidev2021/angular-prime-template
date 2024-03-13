import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { environment as env } from 'src/environments/environment.dev';
@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private translateService: TranslateService) { }

  setLanguage() {
    this.translateService.addLangs(['id_ID', 'en_US']);
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('id_ID');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use('id_ID');
  }

  switchLang(isLang: string) {
    this.translateService.use(isLang);
  }

  addCustomEvent() {
    window.addEventListener("CHANGE_LANGUAGE", (event) => {
      this.listenChangeLang(event, this.translateService)
    });
  }

  removeCustomEvent() {
    window.removeEventListener("CHANGE_LANGUAGE", (event) => {
      this.listenChangeLang(event, this.translateService)
    });
  }

  listenChangeLang(event: any, translateService: TranslateService): void {
    const isLang = event?.detail?.lang;
    translateService.use(isLang)
  }

  logLangSetting(moduleName: string, lang: LangChangeEvent) {
    if (env.debug.lang) {
      console.info(`Initialize Lang ==> ${moduleName} Module`, lang);
    }
  }

}
