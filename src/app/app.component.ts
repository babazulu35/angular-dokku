import { Component, HostBinding } from '@angular/core';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { TetherDialog } from './components/tether-dialog/tether-dialog';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@HostBinding('class.no-scroll')
	get noScroll():Boolean {
		return this._tetherService.bodyLocked;
	}

	private _tetherService: TetherDialog;

	isSideMenuCollapsed:boolean;
	toggleSideMenu(isSideMenuCollapsed){
		this.isSideMenuCollapsed = isSideMenuCollapsed;
	}

	constructor(_tetherService:TetherDialog) {
		this._tetherService = _tetherService;
	}

}
