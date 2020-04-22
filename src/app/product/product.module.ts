import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProductListComponent } from './containers/product-list/product-list.component';


@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }