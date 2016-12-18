import { Component, OnInit, Output, Input , EventEmitter, HostBinding } from '@angular/core';
/**
 * Sort title button. Bubbles 'toggleSortTitle()' event to parent component and shows correct sort status of title.
 *
 * @param {string} sortTitle - visible text
 * @param {string} sortBy - name of query param
 * ### Example
 * <app-sort-title sortTitle='Kişiler' sortBy='people'></app-sort-title>
 */
@Component({
    selector: 'app-sort-title',
    templateUrl: './sort-title.component.html',
    styleUrls: ['./sort-title.component.scss']
})

export class SortTitleComponent implements OnInit {
	@Input() sortTitle : string;
	@Input() sortBy : string;
	@Output() toggleSortTitle : EventEmitter<Object> = new EventEmitter<Object>();
    @HostBinding('class') class  = 'c-sort-title';
	sortType : string = '';
    toggle() {
    	this.sortType = (this.isAsc || !this.hasSort) ? 'desc' : 'asc';
        this.toggleSortTitle.emit({ sortBy: this.sortBy, type: this.sortType });
    }
    @HostBinding('class.c-sort-title--down') get isDesc() : boolean{
    	return (this.sortType === 'desc') ? true : false;
    }
    @HostBinding('class.c-sort-title--up') get isAsc() : boolean{
    	return (this.sortType === 'asc') ? true : false;
    }
    @HostBinding('class.c-sort-title--selected') get hasSort() : boolean{
    	return (this.sortType !== '') ? true : false;
    }
  	constructor() { }

  	ngOnInit() {
  	}

}
