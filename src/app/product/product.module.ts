import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductDetailComponent } from "./containers/product-detail/product-detail.component";
import { ProductListComponent } from "./containers/product-list/product-list.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductComponent } from "./components/product/product.component";

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
})
export class ProductModule {}
