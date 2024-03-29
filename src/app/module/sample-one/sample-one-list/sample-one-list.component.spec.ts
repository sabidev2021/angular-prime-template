import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleOneListComponent } from './sample-one-list.component';
import { TranslateModule } from '@ngx-translate/core';

describe('SampleOneListComponent', () => {
  let component: SampleOneListComponent;
  let fixture: ComponentFixture<SampleOneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleOneListComponent ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleOneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
