import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item1',
  imports: [CommonModule],
  templateUrl: './item1.component.html',
  styleUrl: './item1.component.scss'
})

export class Item1Component {

  //IO properties
  @Input() mgInvoiceItems: any[] = [];
  @Output() subTotalAmount:number= 0;

  //Local properties
  hourTotal: number = 0;

  //Life cycle hook
  ngOnInit(): void {
    this.calculateHourTotal();
    this.calculateSubtotal();
  }

  //Method to calculate the total hours
  calculateHourTotal(): void {
    this.hourTotal = this.mgInvoiceItems.reduce((total, mgEachInvoiceItems) => (total + mgEachInvoiceItems.mg_hours) , 0);
  }
  
  //Method to calculate the subtotal
  calculateSubtotal(): void {
    this.mgInvoiceItems.forEach(mgEachInvoiceItems => {
      mgEachInvoiceItems.mg_subtotal = (mgEachInvoiceItems.mg_hours * mgEachInvoiceItems.mg_rate);
    });
  }

}
