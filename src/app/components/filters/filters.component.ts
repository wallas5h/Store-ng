import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styles: [],
})
export class FiltersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() showCategory = new EventEmitter<string>();
  categories = ["shoes", "clothes", "sports"];
  panelOpenState = false;

  onShowCategory(category: string) {
    this.showCategory.emit(category);
  }
}
