import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ImageSlider, Channel, TopMenus } from 'src/app/shared/components'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
  //  注入到跟用字符串‘root’,如果注入到模块用HomeModule类型
})
export class HomeService {
  constructor(private http: HttpClient) { }

  getBanners() {
    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`);
  }

  getChannels() {
    return this.http.get<Channel[]>(`${environment.baseUrl}/channels`);
  }

  getTabs() {
    return this.http.get<TopMenus[]>(`${environment.baseUrl}/tabs`);
  }
}