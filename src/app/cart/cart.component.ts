import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    console.log('COMPONENTE CRIADO');
  }

  items = this.cartService.getItems();
  total = this.cartService.getTotal();

  removeItem(id: Number) {
    this.cartService.removeFromCart(id);
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }
}
