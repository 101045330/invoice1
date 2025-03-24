import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
//import '../../shared/shared-styles.service.css';
@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
  //styleUrls: ['./totals.component.scss', '../../shared/shared-styles.service.scss']
})
export class ItemComponent implements OnChanges {
  @Input() mgInvoiceItems: any[] = [];

  totalHours: number = 0;
  //subtotal: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mgInvoiceItems']) {
      this.mgCalculateTotals();
      console.log("Item Component: Items Changed");

    }
  }

  mgCalculateTotals(): void {
    this.totalHours = this.mgInvoiceItems.reduce((total, item) => total + item.mg_hours, 0);
    console.log("Item Component: Total Hours: ", this.totalHours);
  }
}