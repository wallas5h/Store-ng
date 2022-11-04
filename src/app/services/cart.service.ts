import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../model/cart.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackBar: MatSnackBar) {}

  addToCart(product: CartItem) {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((item) => item.id === product.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(product);
    }

    this.cart.next({ items });
    this._snackBar.open("1 product added to cart.", "Ok", { duration: 3000 });
  }

  removeQuantityFromCart(product: CartItem) {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((item) => item.id === product.id);

    if (itemInCart) {
      if (itemInCart.quantity <= 0) {
        return;
      }

      itemInCart.quantity -= 1;

      if (itemInCart.quantity === 0) {
        this.removeFromCart(product);
      }
    }

    this.cart.next({ items });
    // this._snackBar.open("1 product removed to cart.", "Ok", { duration: 3000 });
  }

  getCartItems() {
    return this.cart.value.items;
  }

  getCart() {
    return this.cart.value;
  }

  getTotal() {
    return this.cart.value.items
      .map((item) => item.quantity * item.price)
      .reduce((prev, curr) => {
        return prev + curr;
      }, 0);
  }

  getItemsQuantity() {
    return this.cart.value.items
      .map((item) => item.quantity)
      .reduce((prev, curr) => {
        return prev + curr;
      }, 0);
  }

  clearCart() {
    this.cart.next({ items: [] });
    this._snackBar.open("Cart is cleared", "Ok", { duration: 3000 });
  }

  removeFromCart(item: CartItem) {
    const filtered = this.cart.value.items.filter((el) => {
      el.id !== item.id;
    });

    this.cart.next({ items: filtered });
    this._snackBar.open("Product removed from cart", "Ok", { duration: 3000 });
  }
}
