import { Component, OnInit } from "@angular/core";
import { Cart } from "src/app/model/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [],
})
export class HeaderComponent implements OnInit {
  _cart: Cart = { items: [] };
  itemsQuantity = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this._cart = this.cartService.getCart();
    this.itemsQuantity = this.cartService.getItemsQuantity();
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  getItemsQuantity() {
    return this.cartService.getItemsQuantity();
  }

  getCart() {
    return this.cartService.getCart();
  }
  getCartItems() {
    return this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
