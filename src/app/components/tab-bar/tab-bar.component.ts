import { Component, OnInit, HostBinding, Input } from '@angular/core';
/**
 * In route tabs.
 *
 * @param {array} tabs - Each tab array item must have { {string} text, {boolean} isActive } variables.
 */
@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {
	//@HostBinding('class') class = 'o-tab';
	@Input() tabs:Array<any>;

	constructor() { }

	ngOnInit() {
	}

}
