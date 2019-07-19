import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MyRoutingModule } from './my-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    MyRoutingModule
  ]
})
export class MyModule { }
