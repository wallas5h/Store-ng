import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styles: [],
})
export class FiltersComponent implements OnInit, OnDestroy {
  constructor(private storeService: StoreService) {}

  @Output() showCategory = new EventEmitter<string>();
  categories: string[] = [];
  categoriesSubscription: Subscription | undefined;
  panelOpenState = false;

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService
      .getAllCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }
  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

  onShowCategory(category: string) {
    this.showCategory.emit(category);
  }
}
