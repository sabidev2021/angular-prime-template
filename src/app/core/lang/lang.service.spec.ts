import { TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LangService } from './lang.service';

describe('LangService', () => {
  let service: LangService;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [LangService]
    });
    service = TestBed.inject(LangService);
    translateService = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set language', () => {
    const addLangsSpy = spyOn(translateService, 'addLangs');
    const setDefaultLangSpy = spyOn(translateService, 'setDefaultLang');
    const useSpy = spyOn(translateService, 'use');

    service.setLanguage();

    expect(addLangsSpy).toHaveBeenCalledWith(['id_ID', 'en_US']);
    expect(setDefaultLangSpy).toHaveBeenCalledWith('id_ID');
    expect(useSpy).toHaveBeenCalledWith('id_ID');
  });

  it('should switch language', () => {
    const useSpy = spyOn(translateService, 'use');

    service.switchLang('en_US');

    expect(useSpy).toHaveBeenCalledWith('en_US');
  });

  it('should add custom event', () => {
    spyOn(window, 'addEventListener');

    service.addCustomEvent();

    expect(window.addEventListener).toHaveBeenCalled();
  });

  it('should remove custom event', () => {
    spyOn(window, 'removeEventListener');

    service.removeCustomEvent();

    expect(window.removeEventListener).toHaveBeenCalled();
  });

  it('should listen for change language event', () => {
    const event = new CustomEvent('CHANGE_LANGUAGE', { detail: { lang: 'en_US' } });
    const translateServiceSpy = spyOn(translateService, 'use');

    service.listenChangeLang(event, translateService);

    expect(translateServiceSpy).toHaveBeenCalledWith('en_US');
  });

});