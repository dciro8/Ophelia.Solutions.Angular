import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSaleYearComponent } from './GetSaleYear.component';

describe('AddTutorialComponent', () => {
  let component: GetSaleYearComponent;
  let fixture: ComponentFixture<GetSaleYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSaleYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSaleYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
