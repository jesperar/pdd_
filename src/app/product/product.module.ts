import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
