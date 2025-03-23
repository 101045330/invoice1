import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-totals',
  imports: [],
  templateUrl: './totals.component.html',
  styleUrl: './totals.component.scss'
})
export class TotalsComponent implements OnChanges {

  @Input() mgInvoiceItems: any[] = [];

  //Local properties
  mg_subtotal: number = 0;
  mg_tax: number = 0;
  mg_total: number = 0;
  mg_taxRate: number = 13;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mgInvoiceItems']) {
      this.calculateTotals();
    }
  }
  calculateTotals(): void {
    this.mg_subtotal = this.mgInvoiceItems.reduce((sum, item) => {
      return sum + item.mgRate * item.mgHours;
    }, 0);
    this.mg_tax = +(this.mg_subtotal * (this.mg_taxRate / 100)).toFixed(2);
    this.mg_total = +(this.mg_subtotal + this.mg_tax).toFixed(2);
  }

}
/*
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
*/


