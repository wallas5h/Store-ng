import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
  styles: [],
})
export class ProductsHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() columnsCountChange = new EventEmitter<number>();
  sort = "desc";
  itemsShowCount = 12;

  onSortUpdated(newSort: string) {
    this.sort = newSort;
  }

  onItemsUpdated(count: number) {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNumber: number) {
    this.columnsCountChange.emit(colsNumber);
  }
}
