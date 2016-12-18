import { Component,ComponentFactory,ComponentFactoryResolver,Type,
  ViewContainerRef,Injector,ElementRef, ViewChild, OnInit} from '@angular/core';
import {TetherDialog} from '../tether-dialog/tether-dialog';
import {ContextMenuComponent} from '../context-menu/context-menu.component';



@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  entryComponents: [ContextMenuComponent]
})
export class CardItemComponent implements OnInit {
  @ViewChild('parent') parent: ElementRef;
  constructor(
    private resolver: ComponentFactoryResolver,
    private _tetherService: TetherDialog
  ) {}

  ngOnInit() {
  }
    openCardMenu(event) {
    console.log(event);
    this._tetherService.context(this.resolver.resolveComponentFactory(ContextMenuComponent),
    {
      target: event.target,
      attachment: "top right",
      targetAttachment: "top right",
      targetOffset: '-13px 20px'
    }).then(result => {
      console.log("promise result : ", result);
    }).catch(reason => {
      console.log("dismiss reason : ", reason);
    });
  }

    getFactory(component: Type<any>):ComponentFactory<any> {
      return this.resolver.resolveComponentFactory(component);
  }

}
