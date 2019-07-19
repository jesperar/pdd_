import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2, OnDestroy } from '@angular/core';

export interface ImageSlider {
  id: number
  imgUrl: string
  link: string
  caption: string
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, OnDestroy {

  @Input() sliders: ImageSlider[] = []
  @Input() sliderHeight = '160px'
  @Input() intervalBySeconds = 2
  /**
   * @ViewChild
   * 1.引用单个 静态 模板
   * viewChild 从模板里引用元素， static静态设置为true，如果在ngif或者for里设置false
   * ElementRef 是一个包装类型，
   * imgSlider是别名 真正的元素在 imgSlider.nativeElement里
   * ==================================================
   * 2.引用组件
   * 如果引用组件可以直接引用---比如引用自己
   * @ViewChild('ImageSliderComponent') imageSLider: ImageSLiderComponent
   * 简写
   * @ViewChild(ImageSLiderComponent)
   * ===================================================
   * 3.引用多个模板元素 动态 如在for/if
   * <img #img *ngFor="xxxxx">
   * @ViewChildren('img') imgs:QueryList<ElementRef>
   * 
   * Renderer2 安全的操作dom
  */
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef
  @ViewChildren('img') imgs: QueryList<ElementRef>
  selectedIndex = 0;
  intervalId;

  constructor(private rd2: Renderer2) { }
  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log(this.imgSlider);
    // console.log(this.imgs);
    // this.imgs.forEach(item => {
    //   this.rd2.setStyle(item.nativeElement, 'height', '100px')
    // })

    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        (this.getIndex(++this.selectedIndex) *
          this.imgSlider.nativeElement.scrollWidth) /
        this.sliders.length
      );
    }, this.intervalBySeconds * 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(ev: any) {
    const ratio =
      ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }

}
