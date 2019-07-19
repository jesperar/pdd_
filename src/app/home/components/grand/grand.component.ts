import { Component, OnInit, Injectable, Injector, InjectionToken } from '@angular/core';

@Injectable()
class Product {
  constructor(private name: string, private color: string) { }
}

class PurchaseOrder {
  private product: Product;
  private amount: number;
  constructor() {
    this.product = new Product('小米', '黑色');
  }
}

@Component({
  selector: 'app-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit {
  date: Date;
  constructor() {
    const token = new InjectionToken<string>('baseUrl');
    const injector = Injector.create({
      providers: [
        {
          provide: Product,
          // useClass: Product,
          useFactory: () => {
            return new Product('iphone', 'block');
          },
          deps: []
          // useClass 或者用工厂方式自己创建，默认是单例模式，
          // provide 表示angular看到这个名字，就去useClass或者facttory里执行找对应的类
          // deps 依赖线
        },
        {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          deps: [Product]
        },
        {
          provide: token,
          useValue: 'http://baidu.com'
        }
      ]
      // Injector.create不需要手动注册这样做，angular提供了更简单的方法 在模块中的provides里加
    });
    console.log(injector.get(Product));
    console.log(injector.get(token));
  }

  ngOnInit() {
    this.date = this.minusMonths(new Date(), 24);
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  minusMonths(date: Date, months: number) {
    const result = new Date(date);
    result.setMonth(result.getMonth() - months);
    return result;
  }
}
