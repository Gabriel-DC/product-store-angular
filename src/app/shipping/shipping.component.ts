import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}

  shippingCosts!: Observable<{ id: number; type: string; price: number }[]>;
  shippingSelectedId = 0;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
    this.shippingSelectedId = this.cartService.selectedShippingId;
  }

  setShipping(id: number) {
    if (this.cartService.selectedShippingId != id) {
      this.cartService.setShipping(id);
      this.shippingSelectedId = id;
    }
  }
}
