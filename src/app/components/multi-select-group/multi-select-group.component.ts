import { Component,ComponentFactory,ComponentFactoryResolver,Type,
  ViewContainerRef,Injector, OnInit } from '@angular/core';
import {TetherDialog} from '../tether-dialog/tether-dialog';
import {ContextMenuComponent} from '../context-menu/context-menu.component';

@Component({
  selector: 'app-multi-select-group',
  templateUrl: './multi-select-group.component.html',
  styleUrls: ['./multi-select-group.component.scss'],
  entryComponents: [ContextMenuComponent]
})
export class MultiSelectGroupComponent implements OnInit {
  constructor(
    private resolver: ComponentFactoryResolver,
    private _tetherService: TetherDialog
  ) { }

  ngOnInit() {
  }

  openMultiSelectMenu(event) {
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
  getFactory(component:Type<any>):ComponentFactory<any> {
    return this.resolver.resolveComponentFactory(component);
  }

}
