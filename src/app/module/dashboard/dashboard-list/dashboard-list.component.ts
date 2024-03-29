import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { LangService } from 'src/app/core/lang/lang.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent extends DashboardService implements OnInit  {

  title = 'angular-prime-template';

  constructor(
    private dashboardService: DashboardService,
    langService: LangService,
    translateService: TranslateService
  ) {
    super(langService, translateService)
  }

  ngOnInit(): void {
    this.dashboardService.initializeLang();
  }
  
}
