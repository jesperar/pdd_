import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { TopMenus } from 'src/app/shared/components';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  constructor(
    private router: Router,
    private service: HomeService,
    @Inject(token) private baseUrl: string) {
    console.log(baseUrl);
  }

  topMenus: TopMenus[] = [];

  handleTabSelected(tabMenu: TopMenus) {
    console.log(tabMenu)
    this.router.navigate(['home', tabMenu.link])
  }

  ngOnInit() {
    this.service.getTabs().subscribe(tabs => {
      this.topMenus = tabs;
    })
  }

}
