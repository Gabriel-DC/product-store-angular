import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  items: Product[] = [];

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  getTotal(): Number {
    let sum = 0;
    this.items.forEach((i) => (sum += i.price));
    return sum;
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(id: Number) {
    this.items = this.items.filter((i) => i.id != id);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
