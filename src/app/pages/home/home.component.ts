import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/model/product.model";
import { CartService } from "src/app/services/cart.service";

const ROWS_HEIGHT: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 320,
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  category: string | undefined = "";

  onColumnsCountChange(colsNumber: number) {
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(category: string) {
    this.category = category;
  }

  addToCart(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
    });
  }
}
