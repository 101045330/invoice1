import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-totals',
  imports: [],
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss']
})
export class TotalsComponent implements OnChanges {
  @Input() mgInvoiceItems: any[] = [];
   mg_hours: number = 0;

  mg_subtotal: number = 0; 
  mg_taxRate: number = 13;
  mg_tax: number = 0;
  mg_total: number = 0;
 

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mgInvoiceItems']) {
      this.calculateTotals();
    }
  }
  calculateTotals(): void {
    this.mg_subtotal = this.mgInvoiceItems.reduce((acc, item) => {
      const hours = Number(item.mg_hours);
      const rate = Number(item.mg_taxRate);

      if (isNaN(hours) || isNaN(rate)) { return acc + (hours * rate); }
      return acc;
    }, 0);
    this.mg_tax = +(this.mg_subtotal * (this.mg_taxRate / 100)).toFixed(2);
    this.mg_total = +(this.mg_subtotal + this.mg_tax).toFixed(2);
  }
}


