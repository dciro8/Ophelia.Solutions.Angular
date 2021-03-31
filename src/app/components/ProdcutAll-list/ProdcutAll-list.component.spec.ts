import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllProductListComponent } from './ProdcutAll-list.component';

describe('GetAllProductListComponent', () => {
  let component: GetAllProductListComponent;
  let fixture: ComponentFixture<GetAllProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllProductListComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
