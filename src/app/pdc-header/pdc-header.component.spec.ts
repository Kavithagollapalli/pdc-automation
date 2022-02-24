import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdcHeaderComponent } from './pdc-header.component';

describe('PdcHeaderComponent', () => {
  let component: PdcHeaderComponent;
  let fixture: ComponentFixture<PdcHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdcHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
