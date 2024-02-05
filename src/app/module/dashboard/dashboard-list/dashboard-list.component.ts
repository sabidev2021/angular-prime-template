import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/lang/lang.service';
@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  title = 'angular-prime-template';

  constructor(
    private langService: LangService
  ) {}

  ngOnInit(): void {
    this.initLang()
  }

  initLang() {
    this.langService.setLanguage()
  }

}
