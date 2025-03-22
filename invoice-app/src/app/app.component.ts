import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { HeaderComponent } from './header/header.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { ItemComponent } from './item/item.component';
import { TotalsComponent } from './totals/totals.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddItemComponent, HeaderComponent, PaymentTypeComponent, ItemComponent, TotalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //title = 'invoice-app';
  ////
  // Data object for invoice
  mgInvoiceData = {
    mg_name: "Comic Web Design, Inc.",
    mg_address1: "12-123 Fun Street",
    mg_address2: "Toronto, ON, Canada",
    mg_invoice_number: "INV-2025-03-17-CA-ON-000921",
    mg_invoice_date: new Date().toISOString().split('T')[0],
    mg_invoice_due_date: new Date().toISOString().split('T')[0],
    mg_currency_symbol: "$",
    mg_decimal_places: 2,
    mg_payment_type: ['Credit Card', 'PayPal', 'Cheque', 'Cash', 'Bitcoin'],
    mg_tax_amount: 13.00,

    mg_total_hours: 0,
    mg_subtotal_amount: 0,
    mg_tax_amount_total: 0,
    mg_total_amount: 0,

    mg_invoice_items: [
      {
        mg_id: 1,
        mg_item: "Web Design",
        mg_hours: 20,
        mg_hourly_rate: 50.00,
        mg_payment_type_selected: 'Credit Card'
      },
      {
        mg_id: 2,
        mg_item: "Web Development",
        mg_hours: 100,
        mg_hourly_rate: 75.00,
        mg_payment_type_selected: 'Credit Card'
      },
      {
        mg_id: 3,
        mg_item: "Project Management",
        mg_hours: 12,
        mg_hourly_rate: 55.30,
        mg_payment_type_selected: 'Credit Card'
      }
    ]
  };

  //@Output() mgNewItemAdded = new EventEmitter<any>();

  // Method to add new invoice item
  mgAddInvoiceItem(newItem: { item: string, hours: number, rate: number, paymentType: string }) {
    const newInvoiceItem = {
      mg_id: this.mgInvoiceData.mg_invoice_items.length + 1,
      mg_item: newItem.item,
      mg_hours: newItem.hours,
      mg_hourly_rate: newItem.rate,
      mg_payment_type_selected: newItem.paymentType
    };

    this.mgInvoiceData.mg_invoice_items.push(newInvoiceItem);
    this.mgUpdateInvoiceTotals();
    //this.mgNewItemAdded.emit(this.mgInvoiceData); // Notify parent component
  }

  // Method to update the invoice totals (hours, subtotal, tax, total)
  mgUpdateInvoiceTotals() {
    this.mgInvoiceData.mg_total_hours = this.mgInvoiceData.mg_invoice_items.reduce((total, item) => total + item.mg_hours, 0);
    this.mgInvoiceData.mg_subtotal_amount = this.mgInvoiceData.mg_invoice_items.reduce((total, item) => total + (item.mg_hours * item.mg_hourly_rate), 0);
    this.mgInvoiceData.mg_tax_amount_total = (this.mgInvoiceData.mg_subtotal_amount * this.mgInvoiceData.mg_tax_amount) / 100;
    this.mgInvoiceData.mg_total_amount = this.mgInvoiceData.mg_subtotal_amount + this.mgInvoiceData.mg_tax_amount_total;
  }

  // Perform initial calculations
  ngOnInit() {
    this.mgUpdateInvoiceTotals();
  }
  ////


}
