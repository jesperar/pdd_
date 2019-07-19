import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule, ParamInterceptor, NotificationInterceptor } from './home';

import localeZh from '@angular/common/locales/zh-Hans';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  // 导入,只能是模块
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    // 注意如果不是懒加载，一定要在根模块中导入功能模块
    // 才能使子路由导入进来，路由也才可以成功
    HomeModule
  ],
  // 导出，可以是组件 指令 管道
  exports: [],
  providers: [
    {
      // 系统提供的 LOCALE_ID 就是一个 InjectionToken
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  // 入口模块 只有主模块有
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    registerLocaleData(localeZh, 'zh');
  }
}
