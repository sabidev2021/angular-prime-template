import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TranslateService, TranslateModule, TranslateStore, LangChangeEvent } from '@ngx-translate/core';
import { DashboardService } from './dashboard.service';
import { LangService } from 'src/app/core/lang/lang.service';
import { BehaviorSubject } from 'rxjs';

describe('DashboardService', () => {
  let dashboardService: DashboardService;
  let langService: LangService;
  let translateService: TranslateService;

  beforeEach(async() => {
    const translateServiceStub = {
      store: {
        onLangChange: new BehaviorSubject<LangChangeEvent>({ 
          lang: 'en',
          translations: { test: 'dumy' } 
        })
      }
    };

    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        DashboardService,
        LangService,
        TranslateStore,
        { provide: TranslateService, useValue: translateServiceStub },
      ]
    }).compileComponents();

    dashboardService = TestBed.inject(DashboardService);
    langService = TestBed.inject(LangService);
    translateService = TestBed.inject(TranslateService);
  });

  it('should initialize language', fakeAsync(() => {
    spyOn(langService, 'setLanguage');
    spyOn(langService, 'switchLang');
    spyOn(langService, 'logLangSetting');

    dashboardService.initializeLang();
    tick();

    expect(langService.setLanguage).toHaveBeenCalled();

    const newLang: LangChangeEvent = {
      lang: 'en',
      translations: { test: 'dumy' } 
    };
    
    translateService.store.onLangChange.next(newLang);
    tick();

    expect(langService.switchLang).toHaveBeenCalledWith(newLang.lang);
    expect(langService.logLangSetting).toHaveBeenCalledWith('Dashboard', newLang);
  }));
});