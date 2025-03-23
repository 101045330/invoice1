import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-totals',
  imports: [],
  templateUrl: './totals.component.html',
  styleUrl: './totals.component.scss'
})
export class TotalsComponent {
  @Input() mgItems:{mgName: string, mgHours: number, mgRate: number}[] = [];
  @Input() mgTax: number = 0.13;

  //compute the total hours worked
  get mgTotalHours(): number {
    return this.mgItems.reduce((acc, item) => acc + item.mgHours, 0);
  }

  get mgSubtotal():number{
    return this.mgItems.reduce((sum, item) => sum + item.mgRate * item.mgHours, 0);
  }

  get mgTaxAmount():number{
    return this.mgSubtotal * this.mgTax;
  }

  get mgTotal():number{
    return this.mgSubtotal + this.mgTaxAmount
  }

}
