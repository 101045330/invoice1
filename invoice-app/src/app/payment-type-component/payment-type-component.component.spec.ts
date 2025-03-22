import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTypeComponentComponent } from './payment-type-component.component';

describe('PaymentTypeComponentComponent', () => {
  let component: PaymentTypeComponentComponent;
  let fixture: ComponentFixture<PaymentTypeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentTypeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentTypeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
