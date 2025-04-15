import { Component } from '@angular/core';
import { PaymentComponent } from "./payment/payment.component";

@Component({
  selector: 'app-root',
  imports: [PaymentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'payment';
}
