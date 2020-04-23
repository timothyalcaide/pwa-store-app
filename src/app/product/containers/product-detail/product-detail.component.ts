import { Product } from "./../../models/product.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-detail",
  template: `<app-product
    [product]="product$ | async"
    [details]="true"
  ></app-product> `,
  styles: [],
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(map((data) => data["product"]));
  }
}
