import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProductBoxComponent } from "./components/product-box/product-box.component";
import { ProductsHeaderComponent } from "./components/products-header/products-header.component";
import { MaterialModule } from "./Material-Module";
import { CartComponent } from "./pages/cart/cart.component";
import { HomeComponent } from "./pages/home/home.component";
import { CartService } from "./services/cart.service";
import { StoreService } from "./services/store.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
