import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "src/app/model/product.model";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
  styles: [],
})
export class ProductBoxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: "Snickers",
    price: 150,
    category: "shoes",
    description: "Nice shoe for every day",
    image: "https://via.placeholder.com/150",
  };
  @Output() addToCart = new EventEmitter();

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
