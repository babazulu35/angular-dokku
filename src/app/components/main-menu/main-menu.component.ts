import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  inputs: [
    'isSideMenuCollapsed',
  ],
})
export class MainMenuComponent implements OnInit {

	@Output() toggleSideMenu : EventEmitter<boolean> = new EventEmitter<boolean>();
	isSideMenuCollapsed:boolean;
 	constructor() { }
  	ngOnInit() {
  	}
  	toggle(){
	    this.isSideMenuCollapsed = !this.isSideMenuCollapsed;
	    this.toggleSideMenu.emit(this.isSideMenuCollapsed);
  	}
}
