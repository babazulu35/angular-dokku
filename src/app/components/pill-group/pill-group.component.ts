import { Component, OnInit, HostBinding, EventEmitter, Output, Input } from '@angular/core';
/**
 * Pill button groups.
 *
 * @param {array} pills - Pills have to be an iterable array. Each array item must have { {number} count, {string} text, {boolean} isActive } variables.
 */
@Component({
  selector: 'app-pill-group',
  templateUrl: './pill-group.component.html',
  styleUrls: ['./pill-group.component.scss']
})
export class PillGroupComponent implements OnInit {
	@HostBinding('class') class = 'c-pill-group';
	@Input() pills : Array<any>;
	@Output() selectPillFilterAction : EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  	constructor() { }
  	ngOnInit() {
  	}
  	toggle(pill : any){
  		this.selectPillFilterAction.emit(pill);
  	}
}
