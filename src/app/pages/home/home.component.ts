import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "src/app/model/product.model";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";

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
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {
    this.getProducts();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    if (this.productSubscrition) {
      this.productSubscrition.unsubscribe();
    }
  }

  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  category: string | undefined = "";
  products: Array<Product> | [] = [];
  sort = "desc";
  count = "12";
  productSubscrition: Subscription | undefined;

  onColumnsCountChange(colsNumber: number) {
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onItemsCountChange(newCount: number) {
    this.count = String(newCount);
    this.getProducts();
  }

  onSortChange(newSort: string) {
    this.sort = newSort;
    this.getProducts();
  }

  onShowCategory(category: string) {
    this.category = category;
    this.getProducts();
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

  getProducts() {
    this.productSubscrition = this.storeService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }
}
