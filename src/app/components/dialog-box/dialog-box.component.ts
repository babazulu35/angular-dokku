import { Component, OnInit, HostBinding, ContentChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  @HostBinding('class')
  private _class: string = "c-dialog-box";

  @ContentChild('header')
  private _header:ElementRef;

  @ContentChild('body')
  private _body:ElementRef;

  @ContentChild('footer')
  private _footer:ElementRef;

  constructor(
    private _renderer:Renderer
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewChecked(){
    this.position();
  }

  public position(){
    if(this._body) {
      let stickyHeight:number = 0;
      if(this._header) stickyHeight += this._header.nativeElement.offsetHeight;
      if(this._footer) stickyHeight += this._footer.nativeElement.offsetHeight;

      this._renderer.setElementStyle(this._body.nativeElement, "height", (this._body.nativeElement.offsetParent.offsetHeight - stickyHeight) + "px");
    }
  }

}
