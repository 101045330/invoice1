
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

  //two way bound form fields for new item
  mgNewItemName: string = '';
  mgNewItemHours: number | null = null;
  mgNewItemHourlyRate: number | null = null;
  //mgNewItemPaymentType: string = 'Credit Card';

  //output event to send the new item to the parent component
  @Output() mgItemAdded = new EventEmitter<{
    mgName: string,
    mgHours: number,
    mgRate: number,
    //mg_payment_type_default: string
  }>();

  mgAddItem(): void {
    //validate the form fields
    if (this.mgNewItemName && this.mgNewItemHours !== null && this.mgNewItemHourlyRate !== null) {
      //create new item object
      const newItem = {
        mgName: this.mgNewItemName,
        mgHours: this.mgNewItemHours,
        mgRate: this.mgNewItemHourlyRate
      };

      //emit the new item to the parent component
      this.mgItemAdded.emit(newItem);

      //reset the form fields
      this.mgNewItemName = '';
      this.mgNewItemHours = null;
      this.mgNewItemHourlyRate = null;
    }
  }
}
