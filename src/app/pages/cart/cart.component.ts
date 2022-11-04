import { Component, OnInit } from "@angular/core";
import { CartItem } from "src/app/model/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styles: [],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.dataSource = this.cartService.getCartItems();
  }

  // cart: Cart = {
  //   items: [
  //     {
  //       product: "https://via.placeholder.com/150",
  //       name: "snickers",
  //       price: 150,
  //       quantity: 1,
  //       id: 1,
  //     },
  //   ],
  // };

  dataSource: Array<CartItem> = [];
  displayedColumns = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  getTotal() {
    return this.cartService.getTotal();
  }

  clearCart() {
    this.cartService.clearCart();
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  getCartItems() {
    return this.cartService.getCartItems();
  }

  onRemoveQuantity(element: CartItem) {
    this.cartService.removeQuantityFromCart(element);
  }

  onAddQuantity(element: CartItem) {
    this.cartService.addToCart(element);
  }
}
