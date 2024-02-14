import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangService } from './lang/lang.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private langService: LangService
  ) { }

  ngOnInit(): void {
    this.langService.addCustomEvent()
  }

  ngOnDestroy(): void {
    this.langService.removeCustomEvent()
  }

  initCustomEvent(param: string) {
    const event = new CustomEvent("CHANGE_LANGUAGE", {
      detail: {
        lang: `${param}`,
      }
    });

    window.dispatchEvent(event);
  }
}

