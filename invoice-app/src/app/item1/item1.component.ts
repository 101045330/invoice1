import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item1',
  imports: [CommonModule],
  templateUrl: './item1.component.html',
  styleUrl: './item1.component.scss'
})

export class Item1Component {
  @Input() mgInvoiceItems: any[] = [];

  subtotal: number = 0;

  ngOnInit(): void {
    this.calculateSubtotal();
  }

  calculateSubtotal(): void {
    this.subtotal = this.mgInvoiceItems.reduce((total, mgEachInvoiceItems) => (total + mgEachInvoiceItems.mg_hours) , 0);
  }

 /* subtotal: number = 0;

  calculateSubtotal(input: number) {
    this.subtotal += input;
  }*/

/*
  subtotal: number = 0;

  ngOnInit(): void {
    this.calculateSubtotal();
  }

  calculateSubtotal(): void {
    this.subtotal = this.mgInvoiceItems.reduce((mg_hours, img_hourly_rate) => mg_hours + img_hourly_rate, 0);
  }

  items: { name: string; price: number }[] = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 }
  ];
  */

}
