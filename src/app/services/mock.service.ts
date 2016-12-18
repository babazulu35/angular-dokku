import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable()
export class MockService {
	private guestComponent : any;
  	constructor() { }
  	fillInputs(self : Object, parameters : Object) : void {
  		if (!environment.production) {
	  		let componentName = 'set' + self.constructor.name;
	  		this.guestComponent = self;
	  		this[componentName](parameters);
  		}
  	}
  	private setSelectboxComponent(parameters) : void {
  		if(!this.guestComponent.options){
	  		if(parameters.isString){
	  			this.guestComponent.options = [{value:'performers', text:'SANATÇILAR'}, {value:'venues', text:'MEKANLAR'}];
	  		}else{
	  			this.guestComponent.options = [{value:10, text:'10'}, {value:20, text:'20'}];
	  		}
  		}
  	}

	private setPromiseIconComponent(paramter):void {
		this.guestComponent.iconName = "search";
	}

	private setAvatarComponent(type?:string): void {
		switch(type) {
			case "source":
			default:
				this.guestComponent.source = "http://lorempixel.com/400/200/people/9/";
				break;
			case "icon":
				this.guestComponent.iconName = "person";
			break;
			case "letters":
				this.guestComponent.letters = "AC";
			break;
		}
	}
	private setProfilePhotoComponent(parameters): void {
		this.guestComponent.source = "http://lorempixel.com/400/200/people/9/";
	}
	private setPaginationComponent(parameters):void{
		this.guestComponent.totalItem = 33;
		this.guestComponent.showItemPerPage = 5;
		this.guestComponent.showItemPerPage = 1;
	}
}
