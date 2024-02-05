import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  title = 'angular-prime-template';

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.initLang()
  }

  initLang() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('in_ID');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use('in_ID');
  }

}
