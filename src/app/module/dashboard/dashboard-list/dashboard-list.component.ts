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
    this.initializeLang()
  }

  initializeLang() {
    this.langService.setLanguage()
    this.translateService.store.onLangChange.subscribe(
      (lang: LangChangeEvent) => {
        console.log(' ==> DashboardModule ', lang);
        this.langService.switchLang(lang.lang);
      }
    );
  }

}
