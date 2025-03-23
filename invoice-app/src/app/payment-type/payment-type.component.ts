import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import '../../shared/shared-styles.service.css';
@Component({
  selector: 'app-payment-type',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.scss'
  //styleUrls: ['./totals.component.scss', '../../shared/shared-styles.service.scss']
})
export class PaymentTypeComponent {
  @Input() mgPaymentTypes:String[] = [];
  @Input() selectedPaymentType:String = '';
  @Output() mgPaymentChange = new EventEmitter<string>();
  //electedValue: string = '';

  //emit the new selected payment when dropdown changes
  mgOnPaymentChange(event: Event):void {
    const select = event.target as HTMLSelectElement;
    this.selectedPaymentType = select.value;
    //this.mgPaymentChange.emit((event.target as HTMLSelectElement).value);
  }
}
