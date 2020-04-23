import { Product } from "./../../models/product.model";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-list",
  template: ` <app-products [products]="products$ | async"></app-products> `,
  styles: [],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.service.getProducts();
  }
}
