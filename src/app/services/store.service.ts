import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";

const storeUrl = "https://fakestoreapi.com";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private http: HttpClient) {}

  getAllProducts(
    limit = "12",
    sort = "desc",
    category?: string
  ): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      `${storeUrl}/products${
        category ? "/category/" + category : ""
      }?limit=${limit}&sort=${sort}`
    );
  }

  getAllCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${storeUrl}/products/categories`);
  }
}
