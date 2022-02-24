import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdcAddProductlistComponent } from './pdc-add-productlist.component';

describe('PdcAddProductlistComponent', () => {
  let component: PdcAddProductlistComponent;
  let fixture: ComponentFixture<PdcAddProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdcAddProductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdcAddProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
