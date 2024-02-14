import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private translateService: TranslateService) { }

  setLanguage() {
    this.translateService.addLangs(['in_ID', 'en_US']);
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('in_ID');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use('in_ID');
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

}
