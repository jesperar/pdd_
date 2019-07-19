import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TopMenus {
  id: number
  title: string
  link?: string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})

export class ScrollableTabComponent implements OnInit {
  selectedIndex = -1
  @Input() backgroundColor = '#FFF';
  @Input() menus: TopMenus[] = [];
  @Input() titleActiveColor = 'red';
  @Input() titleColor = '#666';
  @Input() indeicatorColor = 'red';
  @Output() tabSelected = new EventEmitter();
  constructor() { }

  /**
   * 在组件`@Input`属性发生变化时候调用
   * @param changes 索引对象，key是属性的名字
   */
  /*  ngOnChanges(changes: SimpleChanges): void {
     console.log('组件输入属性改变', changes);
   } */

  ngOnInit(): void {
  }

  /* ngDoCheck(): void {
    console.log('脏值检测');
  }

  ngAfterContentInit(): void {
    console.log('组件内容初始化（模板里的内容）');
  }

  ngAfterContentChecked(): void {
    console.log('组件内容脏值检查（模板里的内容）');
  }

  ngAfterViewInit(): void {
    console.log('组件视图（子组件）初始化完成时');
  }

  ngAfterViewChecked(): void {
    console.log('当检测视图变化时 多次');
  } */

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }
}
