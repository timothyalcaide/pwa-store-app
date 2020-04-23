import { Product } from "./../../models/product.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-product-detail",
  template: ` {{ product | json }} `,
  styles: [],
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit(): void {
    this.product.id = this.route.snapshot.paramMap.get("id");
    this.service
      .getProduct(this.product.id)
      .subscribe((res) => (this.product = res));
  }
}
