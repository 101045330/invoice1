
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import '../../shared/shared-styles.service.scss';
@Component({
  selector: 'app-add-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
  //styleUrls: ['./add-item.component.scss', '../../shared/shared-styles.service.scss']
})
export class AddItemComponent {

  mg_invoice_item =
    {
      mg_item: "",
      mg_hours: 0,
      mg_hourly_rate: 0.00,
      mg_payment_type_default: 'Credit Card'
    };

  // handle the form submission 
  @Output() itemAdded = new EventEmitter<{
    mg_item: string,
    mg_hours: number,
    mg_hourly_rate: number,
    mg_payment_type_default: string
  }>();
  
  //reset the form
  resetForm() {
    this.mg_invoice_item = {
      mg_item: "",
      mg_hours: 0,
      mg_hourly_rate: 0.00,
      mg_payment_type_default: 'Credit Card'
    };
  }
  //submit the form
  onSubmit() {

    //validate first
    if (this.mg_invoice_item.mg_item
      && this.mg_invoice_item.mg_hours > 0
      && this.mg_invoice_item.mg_hourly_rate > 0
      && this.mg_invoice_item.mg_payment_type_default != '') {

      //emitter sends the form data to te parent component
      this.itemAdded.emit(this.mg_invoice_item);

      //reset form after successful submission
      this.resetForm();

    } else {
      alert('Please fill in all fields');
    }
  }
}

