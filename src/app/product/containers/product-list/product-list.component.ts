import { Product } from "./../../models/product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  template: ` {{ product | json }} `,
  styles: [],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor() {}

  ngOnInit(): void {}
}
