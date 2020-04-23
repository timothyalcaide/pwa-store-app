import { Product } from "./../../models/product.model";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { UiService } from "src/app/ui/services/ui.service";

@Component({
  selector: "app-product-list",
  template: ` <app-products [products]="products$ | async"></app-products> `,
  styles: [],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private route: ActivatedRoute, private ui: UiService) {}

  ngOnInit(): void {
    this.products$ = this.route.data.pipe(
      map((data) => data["products"]),
      tap((products) => this.metaData(products))
    );
  }

  metaData(products: Product[]) {
    this.ui.setMetaData({
      title: "Products",
      description: `Check out our collection of ${products.length} products`,
    });
  }
}
