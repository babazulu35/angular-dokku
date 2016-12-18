import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderTitleService {
	private title;
    constructor() {}
  	setTitle(title){
  		this.title = title;
  	}
  	getTitle(){
  		return this.title;
  	}
}
