import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/lang/lang.service';
@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  title = 'angular-prime-template';

  constructor(
    private langService: LangService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.initLang()
  }

  initLang() {
    this.langService.setLanguage()
    console.log(this.translateService.store.langs)
    console.log(this.translateService.store.currentLang)
    let currentLang = this.translateService.currentLang;
    currentLang = '';
    this.translateService.store.onLangChange.subscribe(
      (lang: LangChangeEvent) => {
        console.log(' ==> DashboardModule ', lang);
        this.translateService.use(lang.lang);
      }
    );
  }

}
