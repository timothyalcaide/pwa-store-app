import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LazyLoadImageDirective } from "./directives/lazy-load-image.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [LazyLoadImageDirective],
  exports: [LazyLoadImageDirective],
})
export class SharedModule {}
