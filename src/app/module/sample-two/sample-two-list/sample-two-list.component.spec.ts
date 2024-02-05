import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTwoListComponent } from './sample-two-list.component';

describe('SampleTwoListComponent', () => {
  let component: SampleTwoListComponent;
  let fixture: ComponentFixture<SampleTwoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleTwoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTwoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
