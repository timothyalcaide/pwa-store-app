import { Product } from "./../../models/product.model";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-list",
  template: ` <app-products [products]="products$ | async"></app-products> `,
  styles: [],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.products$ = this.route.data.pipe(map((data) => data["products"]));
  }
}
