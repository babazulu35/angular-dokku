import {
  Component,
  Injectable,
  ViewChild,
  ViewContainerRef,
  HostBinding,
  HostListener,
  Directive,
  ElementRef,
  EventEmitter,
  Output
} from '@angular/core';

import {TetherDialogComponent} from './tether-dialog.component';

@Injectable()
export class TetherDialog {

  private _component: TetherDialogComponent;

  get component(){
    return this._component;
  }

  private _tetherOptions: TetherOptions;

  private _promise: Promise<boolean>;
  get promise(){
    return this._promise;
  }

  private _resolve: (result?: any) => void;
  private _reject: (reason?: any) => void;

  public get bodyLocked() {
    return this._component.bodyLocked;
  }

  constructor() {

  }

  modal(content:any, options?:{}):Promise<boolean> {
    this._tetherOptions = new TetherOptions("modal", options);
    return this.open(content, this._tetherOptions);
  }

  drawer(content:any, options?:{}):Promise<boolean> {
    this._tetherOptions = new TetherOptions("drawer", options);
    return this.open(content, this._tetherOptions);
  }

  tooltip(content:any, options?:{}):Promise<boolean> {
    this._tetherOptions = new TetherOptions("tooltip", options);
    return this.open(content, this._tetherOptions);
  }

  context(content:any, options?:{}):Promise<boolean> {
    this._tetherOptions = new TetherOptions("context", options);
    return this.open(content, this._tetherOptions);
  }

  tether(content:any, options?:{}):Promise<boolean> {
    this._tetherOptions = new TetherOptions("tether", options);
    return this.open(content, this._tetherOptions);
  }

  position() {
    if(this._component) this._component.position();
  }

  private open(content:any, options:TetherOptions):Promise<boolean>{
    if(!this._component) {
      throw new Error("Missing tether component, add <app-tether-dialog></app-tether-dialog> on application template");
    }
    this._component.open(content, options);
    return this.createPromise();
  }

  close(result?: any): void {
    if(this._component) {
      this._resolve(result);
    }
    this._component.close();
  };

  dismiss(reason?: any): void {
    if(this._tetherOptions.settings.dismissConfirm) {
      this.dissmisConfirm(reason);
      return;
    }else {
      if(reason && reason.target == "overlay" && this._tetherOptions.settings.overlay && this._tetherOptions.settings.overlay.dismissConfirm) {
        this.dissmisConfirm(reason);
        return;
      }
    }

    if(this._component) {
      if(reason) {
        this._reject(reason);
      }
      this._component.close();
    }
  };

  dissmisConfirm(reason?:any):void{
    if(window.confirm(this._tetherOptions.settings.dismissConfirmMessage)) {
      if(this._component) {
        if(reason) {
          this._reject(reason);
        }
        this._component.close();
      }
    }
  };

  createPromise():Promise<boolean> {
    return this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }

  registerComponent(tetherDialogComponent: TetherDialogComponent) { this._component = tetherDialogComponent;}

}

export class TetherOptions {
  private _settings = {};
  private _options = {};
  private _globalDefaults = {
    classPrefix: "c-tether-"
  }
  private _defaults = {
    modal: {
      overlay: {
        closeWhenClicked: true,
        class: null,
        backgroundColor: null,
        dismissConfirm: false
      },

      dialog: {
        style: {
          width: "50vw",
          height: "100vh",
          backgroundColor: null
        },
        class: null
      },

      dismissConfirm: false,
      dismissConfirmMessage: "Kapatmak istediğinize emin misiniz?",
      
      element: ".c-tether-dialog__content",
      target: ".c-tether-dialog",
      attachment: "middle center",
      targetAttachment: "middle center",

      constraints: [
        {
          to: 'scrollParent',
          pin: true
        },
        {
          to: 'window',
          attachment: 'together',
          pin: true
        }
      ]
    },
    drawer: {
      overlay: {
        closeWhenClicked: true,
        class: null,
        backgroundColor: null,
        dismissConfirm: true
      },

      dialog: {
        style: {
          width: "65vw",
          height: "100vh",
          backgroundColor: null
        },
        class: null
      },

      dismissConfirm: false,
      dismissConfirmMessage: "Kapatmak istediğinize emin misiniz?",
      
      element: ".c-tether-dialog__content",
      target: ".c-tether-dialog",
      attachment: "top right",
      targetAttachment: "top right",

      constraints: [
        {
          to: 'scrollParent',
          pin: true
        },
        {
          to: 'window',
          attachment: 'together',
          pin: true
        }
      ]
    },
    context: {
      overlay: null,

      dialog: {
        style: null,
        class: null
      },

      dismissConfirm: false,
      dismissConfirmMessage: "Kapatmak istediğinize emin misiniz?",
      
      element: ".c-tether-dialog__content",
      target: ".c-tether-dialog",
      attachment: "top right",
      targetAttachment: "top right",

      constraints: [
        {
          to: 'scrollParent',
          pin: true
        },
        {
          to: 'window',
          attachment: 'together',
          pin: true
        }
      ]
    },
    pin: {

    }
  }

  get settings():any { return this._settings };

  constructor(type: string, options?:{}) {
    this._settings = Object.assign({}, this._defaults[type], options);
    this._settings = Object.assign({}, this._settings, this._globalDefaults);
  }
}

@Component({
  selector: 'app-tether-dialog__content',
  template: `
      <template #contentContainer></template>
  `
})
export class TetherDialogContent {
  @ViewChild('contentContainer', {read: ViewContainerRef})
  private _contentContainer: ViewContainerRef;

  @HostListener('window:resize', ['$event'])
  resizeEventHandler(event) {
    console.log(event);
  }

  @HostBinding('class')
  private _classes = "c-tether-dialog__content";

  set classes(value) {
    if(value){
      this._classes = "c-tether-dialog__content " + value;
    }else{
      this._classes = "c-tether-dialog__content";
    }
  };

  @HostBinding('style.width')
  private _styleWidth;

  @HostBinding('style.height')
  private _styleHeight;

  @HostBinding('style.background-color')
  private _styleBackgroundColor;

  private _settings:any;
  private _elementRef: ElementRef;

  get contentContainer():ViewContainerRef
  {
    return this._contentContainer;
  };

  constructor(_elementRef: ElementRef) {
    this._elementRef = _elementRef;
  }

  public setDialogSettings(settings?:any){
    let styles= [];
    this._settings = settings;
    if(settings){
      if(settings.style) {
        if(settings.style.width) this._styleWidth = settings.style.width;
        if(settings.style.height) this._styleHeight = settings.style.height;
        if(settings.style.backgroundColor) this._styleBackgroundColor = settings.style.backgroundColor;
      }
      if(settings.class){
        if(settings.class) this.classes = settings.class;
      }
    ;}
  };
  
  public ngOnDestroy(){
    if (this._contentContainer) {
        this._contentContainer.clear()
        this._contentContainer = null;
    };
  };
}

@Component({
  selector: 'app-tether-dialog__overlay',
  template: '',
  host: {'class': 'c-tether-dialog__overlay'}
})
export class TetherDialogOverlay {}
