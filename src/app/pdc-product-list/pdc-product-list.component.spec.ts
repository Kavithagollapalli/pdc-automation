import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdcProductListComponent } from './pdc-product-list.component';

describe('PdcProductListComponent', () => {
  let component: PdcProductListComponent;
  let fixture: ComponentFixture<PdcProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdcProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdcProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
