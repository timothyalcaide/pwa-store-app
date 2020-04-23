import { Product } from "./../../models/product.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { UiService } from "src/app/ui/services/ui.service";

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
  constructor(private route: ActivatedRoute, private ui: UiService) {}

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(
      map((data) => data["product"]),
      tap((product) => this.metaData(product))
    );
  }

  metaData(product: Product) {
    this.ui.setMetaData({
      title: `${product.name} for only ${product.price}€`,
      description: product.description,
      image: product.image,
    });
  }
}
