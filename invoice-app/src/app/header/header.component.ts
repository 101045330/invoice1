import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
//import '../../shared/shared-styles.service.scss';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
  //styleUrls: ['./totals.component.scss', '../../shared/shared-styles.service.scss']
})
export class HeaderComponent {
  //receive input from parent component
  @Input() mgInvoiceData:any; 
}
