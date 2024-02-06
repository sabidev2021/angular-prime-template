import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.callCustomEvent()
  }

  ngOnDestroy(): void {
    this.removeCustomEvent()
  }

  initCustomEvent(param: string) {
    const event = new CustomEvent("CHANGE_LANGUAGE", {
      detail: {
        lang: `${param}`,
      }
    });

    window.dispatchEvent(event);
  }

  callCustomEvent() {
    window.addEventListener("CHANGE_LANGUAGE", (event) => {
      this.listenChangeLang(event, this.translateService)
    });
  }

  listenChangeLang(event: any, translateService: TranslateService): void {
    const isLang = event?.detail?.lang;
    translateService.use(isLang)
  }

  removeCustomEvent() {
    window.removeEventListener("CHANGE_LANGUAGE", (event) => {
      this.listenChangeLang(event, this.translateService)
    });
  }

}

