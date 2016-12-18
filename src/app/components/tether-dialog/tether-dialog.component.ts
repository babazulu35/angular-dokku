import {
  Component,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  Renderer,
  TemplateRef,
  EmbeddedViewRef,
  ViewContainerRef,
  OnInit,
  OnDestroy,
  Injectable,
  Injector,
  ReflectiveInjector,
  HostBinding,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';

import {isDefined, isString} from '../../util/is.util';
import {HeaderSearchBarComponent} from '../header-search-bar/header-search-bar.component';

import {
  TetherDialog,
  TetherDialogContent,
  TetherDialogOverlay,
  TetherOptions
} from './tether-dialog';

declare var Tether: any;

@Component({
  selector: 'app-tether-dialog',
  //templateUrl: './tether-dialog.component.html',
  template: `
    template: '<template #overlayContainer></template>'
    template: '<template #contentContainer></template>'
  `,
  entryComponents: [TetherDialogContent, TetherDialogOverlay],
  host: {
    class: "c-tether-dialog"
  },
  styleUrls: ['./tether-dialog.component.scss']
})

export class TetherDialogComponent implements OnInit, OnDestroy {
  @ViewChild('overlayContainer', {read: ViewContainerRef})
  private _overlayRefContainer: ViewContainerRef;

  @ViewChild('contentContainer', {read: ViewContainerRef})
  private _contentRefContainer: ViewContainerRef;


  @HostListener('document:click', ['$event'])
  clickHandler(event) {
      let targetElement = event.target;
      if(this._isOpen && this._isReady && targetElement.offsetParent){
        const clickedInside = this._contentRef.location.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this._tetherService.dismiss({target: "overlay"});
        }
      }
  }

  private _overlayRef: ComponentRef<TetherDialogOverlay>;
  private _contentRef: ComponentRef<TetherDialogContent>;
  private _currentDialog: any;

  private _tether: any;

  private _isOpen: Boolean = true;
  @HostBinding('class.c-tether-dialog--on')
  get isOpen():Boolean {
    return this._isOpen;
  }
  
  private _bodyLocked: Boolean = false;
  get bodyLocked():Boolean {
    return this._bodyLocked;
  }

  private _isReady: Boolean = false;

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _injector: Injector,
    private _renderer: Renderer,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _tetherService: TetherDialog
  ) {

    _tetherService.registerComponent(this);
  };

  ngOnInit() {
    
  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    let self = this;
    setTimeout(function(){self._isOpen = false;},0);
  }

  open(content: any, tetherOptions: TetherOptions):TetherDialogComponent {
    this._isOpen = true;
    this._bodyLocked = true;

    if(tetherOptions.settings.overlay){
      this._overlayRef = <ComponentRef<TetherDialogOverlay>>this._overlayRefContainer.createComponent(this._componentFactoryResolver.resolveComponentFactory(TetherDialogOverlay));
    }
    this._contentRef = <ComponentRef<TetherDialogContent>>this._contentRefContainer.createComponent(this._componentFactoryResolver.resolveComponentFactory(TetherDialogContent));
    
    this._contentRef.instance.setDialogSettings(tetherOptions.settings.dialog);
    this.addContent(content);
    
    let self = this;
    setTimeout(function(){
      self._tether = new Tether(tetherOptions.settings);
      self._tether.position();
    }, 0);
    
    setTimeout(function(){
      self._tether.position();
      self._isReady = true;
    }, 0.5);

    return this;
  }

  close() {    
    if(this._tether) this._tether.destroy();
    
    if(this._currentDialog instanceof ComponentRef) {
      this._currentDialog["destroy"]();
    }
    
    if(this._contentRef) this._contentRef.destroy();
    if(this._overlayRef) this._overlayRef.destroy();

    if(this._contentRefContainer) this._contentRefContainer.clear();
    if(this._overlayRefContainer) this._overlayRefContainer.clear();

    this._isOpen = false;
    this._bodyLocked = false;
    this._isReady = false;
  }

  position(){
    //this._renderer.invokeElementMethod(window, 'resize');
    let self = this;
    setTimeout(function() {
      if(self._tether) self._tether.position();  
    }, 100);
    
    
  }

  private addContent(content: any) {
    if(!content) {
 
    }else if(content instanceof TemplateRef) {
      this._currentDialog = this._contentRef.instance.contentContainer.createEmbeddedView(content);
    }else if(isString(content)) {
      this._currentDialog = this._renderer.createText(null, `${content}`);
    }else if(content instanceof ComponentFactory) {
      this._currentDialog = this._contentRef.instance.contentContainer.createComponent(content);
    }else{ // content = component
      const contentFactory = this._componentFactoryResolver.resolveComponentFactory(content);
      this._currentDialog = this._contentRef.instance.contentContainer.createComponent(contentFactory, 0);
    };
  }

}
