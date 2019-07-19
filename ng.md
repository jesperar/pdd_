ng generate component 组件名-驼峰形式
ng g c 组件名

### *ngIf *ngFor
```
<div *ngIf="表达式"></div>

<div *ngIf="表达式 else elseContent"></div>
<ng-template #elseContent></ng-template>

<div *ngIf="表达式; then thenContent; else elseTemplate"></div>
<ng-template #thenContent>条件为真显示</ng-template>
<ng-template #elseContent>条件为假显示</ng-template>

========================================

*ngFor="let item of menus; 
            let i = index; 
            trackBy: item?item.title:null;
            let f = first;
            let l = last;
            let even = even;
            let odd = odd"



<div [ngSwitch]="表达式"/>
  <ng-template [ngSwitchCase]="case1Exp">...</ng-template>
  <ng-template ngSwitchCase="case1LiteralString">...</ng-template>
  <ng-template ngSwitchDefault="case1Exp">...</ng-template>
```


### style
```
<div [class.className] = "条件表达式">  适合单个样式条件绑定

<div [ngClass]="{'one': true, 'two': false, 'three': true}"   自由度和扩展性最强的方式

<div [ngStyle]="{'color': someColor, 'font-size':fontSize}">  覆盖，慎用
```


### 生命周期
  - constructor                           
  - ngOnChanges                输入属性时被调用
  - ngOnInit                   组件初始化
  - ngDoCheck                  脏值检测
    - ngAfterContentInit       内容投影ng-content完成时调用
    - ngAfterContentChecked    检测投影内容时调用（多次）
    - ngAfterViewInit          当组件视图（子组件）初始化完成时
    - ngAfterViewChecked       当检测视图变化时 多次
  - ngDoDestroy                组件销毁

> 让组件可以嵌套内容 下面加上 <ng-content></ng-content>
> <ng-content select="样式类/html标签/指令"></ng-content>

select="span" 只显示父标签为span的容器
select=".special" 只显示class为special的容器
select="[appGrid]" 只显示指令为appGrid的容器


### view-child
```
 @ViewChild
 1.引用单个 静态 模板
 viewChild 从模板里引用元素， static静态设置为true，如果在ngif或者for里设置false
 ElementRef 是一个包装类型，
 imgSlider是别名 真正的元素在 imgSlider.nativeElement里
 ==================================================
 2.引用组件
 如果引用组件可以直接引用---比如引用自己
 @ViewChild('ImageSliderComponent') imageSLider: ImageSLiderComponent
 简写
 @ViewChild(ImageSLiderComponent)
 ===================================================
 3.引用多个模板元素 动态 如在for/if
 <img #img *ngFor="xxxxx">
 @ViewChildren('img') imgs:QueryList<ElementRef>
 
 Renderer2 安全的操作dom

```

### 模块
```
ng g m modulename --routing
```

### js原型链
```
  JavaScript 只有一种结构：对象。
  每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（prototype ）
  -> person1.__proto__ = Person.prototype
  该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 null。
  -> Person.prototype.__proto__
  根据定义，null 没有原型，并作为这个原型链中的最后一个环节。
```

### 指令
```
指令
1. 组件
2. 结构性
3. 属性型

```

### 路由
```
配置
{path: ':tabLink', component: HomeDetailComponent}

激活
1. <a [routerLink]="['/home', tab.link, {name: 'val1' .....}]"></a>  http://localhost:4200/home/hot;name=val1
2. this.router.navigate(['home', tab.link])                          http://localhost:4200/home/hot
    this.router.navigate(['home', tab.link, {name: 'val1'}])         ;
    this.router.navigate(['home'], {queryParams: {name: 'val1'}})    ?
3. <a [routerLink]="['/home']" [queryParams]={name: 'val1'}></a>     http://localhost:4200/home/hot?name=val1

读取
paramsMap/queryParamsMap
this.route.paramsMap.subscribe(params => {})
```


### 脏值检测
```
<!-- zone 浏览器运行js的进行时 -->
constructor(private ngZone: NgZone)

ngAfterViewChecked(): void{
  this.ngZone.runOutsideAngular(() => {
    setInterval(() => {
      this._title = '您好'
      <!-- 
        this.timeRef.navtiveElement.innerHTML = Date.now()
       -->
    }， 100)
  })
}

持续性变化操作dom

@components里加上
changeDetection: ChangeDetectionStrategy.onPush 只会检测 @input的值 而且只会跑当前分支不是走全部的树。提升性能

但是这样路由会出现问题，因为路由是非@input的并绑定一次，（homeDetailComponent）
所以需要在constructor里添加 private cd: ChangeDetectorRef
并在路由改变参数的时候添加this.cd.markForCheck() 手动触发下
```




