import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
