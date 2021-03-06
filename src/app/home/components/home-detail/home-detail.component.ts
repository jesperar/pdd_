import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: HomeService, private cd: ChangeDetectorRef) { }
  selectedTabLink;
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('路径参数: ', params);
      this.selectedTabLink = params.get('tabLink');
      this.cd.markForCheck();
    });
    this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
      this.cd.markForCheck();
    });

    this.service.getBanners().subscribe(banners => {
      this.imageSliders = banners;
      this.cd.markForCheck();
    });
    this.service.getChannels().subscribe(channels => {
      this.channels = channels;
      this.cd.markForCheck();
    });
  }
}
