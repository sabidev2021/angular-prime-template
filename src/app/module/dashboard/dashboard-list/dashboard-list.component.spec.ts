import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardListComponent } from './dashboard-list.component';
import { LangService } from 'src/app/core/lang/lang.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DashboardService } from '../services/dashboard.service';

describe('DashboardListComponent', () => {
  let component: DashboardListComponent;
  let fixture: ComponentFixture<DashboardListComponent>;
  let langService: LangService;
  let translateService: TranslateService;
  let dashboardService: DashboardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardListComponent ],
      imports:[
        TranslateModule.forRoot()
      ],
      providers: [ 
        DashboardService,
        TranslateService,
        LangService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListComponent);
    langService = TestBed.inject(LangService);
    translateService = TestBed.inject(TranslateService);
    dashboardService = TestBed.inject(DashboardService);
    fixture.detectChanges();
  });
  
  it('should create component dashboard', () => {
    fixture = TestBed.createComponent(DashboardListComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});