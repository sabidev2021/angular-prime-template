import { AfterContentInit, Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { from, tap } from 'rxjs';
import { LangService } from 'src/app/core/lang/lang.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements AfterContentInit {
  constructor(
    private langService: LangService,
    private translateService: TranslateService
  ) {
  }

  ngAfterContentInit(): void {
    this.initializeLang()
  } 

  initializeLang() {
    this.langService.setLanguage()
    from(this.translateService.store.onLangChange).pipe(
      tap((lang: LangChangeEvent) => {
        this.langService.switchLang(lang.lang);
        this.langService.logLangSetting('Dashboard', lang);
      })
    ).subscribe();
  }
}

