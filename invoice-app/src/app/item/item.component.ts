import { Component, Input } from '@angular/core';
//import '../../shared/shared-styles.service.css';
@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
  //styleUrls: ['./totals.component.scss', '../../shared/shared-styles.service.scss']
})
export class ItemComponent {
  @Input() mgInvoiceItems: any[] = [];

  subtotal: number = 0;

  calculateSubtotal(price: number) {
    this.subtotal += price;
  }


}