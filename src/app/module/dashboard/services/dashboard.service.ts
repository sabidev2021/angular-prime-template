import { Injectable, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/core/lang/lang.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements OnInit {
  constructor(
    private langService: LangService,
    private translateService: TranslateService
  ) {
  }
  
  ngOnInit(): void {
    this.initializeLang()
  }

  initializeLang() {
    this.langService.setLanguage()
    this.translateService.store.onLangChange.subscribe(
      (lang: LangChangeEvent) => {
        this.langService.switchLang(lang.lang);
        this.langService.logLangSetting('Dashboard', lang);
      }
    );
  }

}

