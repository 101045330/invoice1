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

  calculateSubtotal(input: number) {
    this.subtotal += input;
  }
}
