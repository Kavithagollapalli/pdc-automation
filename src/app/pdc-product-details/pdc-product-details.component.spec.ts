import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdcProductDetailsComponent } from './pdc-product-details.component';

describe('PdcProductDetailsComponent', () => {
  let component: PdcProductDetailsComponent;
  let fixture: ComponentFixture<PdcProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdcProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdcProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
