import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdcEditProductComponent } from './pdc-edit-product.component';

describe('PdcEditProductComponent', () => {
  let component: PdcEditProductComponent;
  let fixture: ComponentFixture<PdcEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdcEditProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdcEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
