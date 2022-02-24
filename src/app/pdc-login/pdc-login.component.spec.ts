import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdcLoginComponent } from './pdc-login.component';

describe('PdcLoginComponent', () => {
  let component: PdcLoginComponent;
  let fixture: ComponentFixture<PdcLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdcLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdcLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
