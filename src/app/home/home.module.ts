import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent, HomeDetailComponent, GrandComponent } from './components';
import { token } from './services';

@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent, GrandComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: [
    {
      provide: token,
      useValue: 'http://google.com'
    }
  ]
})
export class HomeModule { }
