import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//added user components
import { AddItemComponent } from './add-item/add-item.component';
import { HeaderComponent } from './header/header.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { Item1Component } from './item1/item1.component';
import { TotalsComponent } from './totals/totals.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddItemComponent, HeaderComponent, PaymentTypeComponent, Item1Component, TotalsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'invoice-app';

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
        mg_hours: 21,
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

  //method to add new invoice item
  mgInvoiceItem(mg_invoice_item: { mg_item: string, mg_hours: number, mg_hourly_rate: number, mg_payment_type: string }) {
    //new item object
    const newInvoiceItem = {
      mg_id: this.mgInvoiceData.mg_invoice_items.length + 1,
      mg_item: mg_invoice_item.mg_item,
      mg_hours: mg_invoice_item.mg_hours,
      mg_hourly_rate: mg_invoice_item.mg_hourly_rate,
      //name change
      mg_payment_type_selected: mg_invoice_item.mg_payment_type
    };
    //push new item object to the invoice items array
    this.mgInvoiceData.mg_invoice_items.push(newInvoiceItem);
    //update invoice totals
    this.mgUpdateInvoiceTotals();

  }

  //method to update invoice totals
  mgUpdateInvoiceTotals() {
    this.mgInvoiceData.mg_total_hours = this.mgInvoiceData.mg_invoice_items.reduce((total, mg_invoice_item) => total + mg_invoice_item.mg_hours, 0);  // Calculate total hours
    this.mgInvoiceData.mg_subtotal_amount = this.mgInvoiceData.mg_invoice_items.reduce((total, mg_invoice_item) => total + (mg_invoice_item.mg_hours * mg_invoice_item.mg_hourly_rate), 0);  // Calculate subtotal amount
    this.mgInvoiceData.mg_tax_amount_total = this.mgInvoiceData.mg_subtotal_amount * (this.mgInvoiceData.mg_tax_amount / 100);  // Calculate tax amount
    this.mgInvoiceData.mg_total_amount = this.mgInvoiceData.mg_subtotal_amount + this.mgInvoiceData.mg_tax_amount_total;  // Calculate total amount
  }

  @Output() mgNewItemAdded = new EventEmitter<any>();

  // Perform initial calculations
  ngOnInit() {
    this.mgUpdateInvoiceTotals();
  }

}
