import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Type,
  ViewContainerRef,
  Injector,
  OnInit
} from '@angular/core';

import { HeaderTitleService } from './../../services/header-title.service';
import {TetherDialog} from '../tether-dialog/tether-dialog';

//Dialog Contents...
import {HeaderSearchBarComponent} from '../header-search-bar/header-search-bar.component';
import {ContextMenuComponent} from '../context-menu/context-menu.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  entryComponents: [ HeaderSearchBarComponent, ContextMenuComponent ],
  host: {
    class: "c-header"
  }
})
export class HeaderComponent implements OnInit {

  get title(){
    return this._headerTitleService.getTitle();
  }

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private viewContainer: ViewContainerRef,
    private _tetherService: TetherDialog,
    private _headerTitleService:HeaderTitleService) {

  }

  ngOnInit() {

  }

  openHeaderSearchBar(event) {
    this._tetherService.modal(this.resolver.resolveComponentFactory(HeaderSearchBarComponent),
    {
      dialog: {
        style: {
          width: "40vw",
          height: "50vh"
        }
      },
      target: event.target,
      attachment: "top right",
      targetAttachment: "top right"
    }).then(result => {
      console.log("promise result : ", result);
    }).catch(reason => {
      console.log("dismiss reason : ", reason);
    });
  }

  openHelpDrawer() {
    this._tetherService.drawer(this.resolver.resolveComponentFactory(HeaderSearchBarComponent),
    {

    }).then(result => {
      console.log("promise result : ", result);
    }).catch(reason => {
      console.log("dismiss reason : ", reason);
    });
  }

  openNotificationModal(){
    this._tetherService.modal(this.resolver.resolveComponentFactory(HeaderSearchBarComponent),
    {
      dialog: {
        class: "c-tether-dialog__content--half"
      },
      dismissConfirm: true,
      dismissConfirmMessage: "İşleminizi kaydetmeden çıkmak istiyor musunuz?"
    }).then(result => {
      console.log("promise result : ", result);
    }).catch(reason => {
      console.log("dismiss reason : ", reason);
    });
  }

  openActionMenu(event) {
    console.log(event);
    this._tetherService.context(this.resolver.resolveComponentFactory(ContextMenuComponent),
    {
      target: event.target,
      attachment: "top right",
      targetAttachment: "top right",
      targetOffset: '-13px 0px'
    }).then(result => {
      console.log("promise result : ", result);
    }).catch(reason => {
      console.log("dismiss reason : ", reason);
    });
  }

  showUserDetail(event) {

  }

  getFactory(component: Type<any>):ComponentFactory<any> {
    return this.resolver.resolveComponentFactory(component);
  }

}