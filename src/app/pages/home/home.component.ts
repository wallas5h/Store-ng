import { Component, OnInit } from "@angular/core";

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
  constructor() {}

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
}
