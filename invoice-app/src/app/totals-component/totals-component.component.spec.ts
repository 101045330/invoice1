import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsComponentComponent } from './totals-component.component';

describe('TotalsComponentComponent', () => {
  let component: TotalsComponentComponent;
  let fixture: ComponentFixture<TotalsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
