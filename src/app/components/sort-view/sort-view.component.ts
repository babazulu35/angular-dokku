import { Component, OnInit, HostBinding, Input } from '@angular/core';
/**
 * Button groups to change layout between card and list view.
 *
 * @param {boolean} isCardViewActive - Activate card view
 * @param {boolean} isListViewActive - Activate list view
 * @param {any|observer} activeView - Change view dynamically from route param. It has to be set on parent component.
 */
@Component({
  selector: 'app-sort-view',
  templateUrl: './sort-view.component.html',
  styleUrls: ['./sort-view.component.scss']
})
export class SortViewComponent implements OnInit {
  	@HostBinding('class') class = 'c-sort-view';
  	@Input() isCardViewActive : boolean = false;
  	@Input() isListViewActive : boolean = false;
    @Input() activeView : any;
  	constructor() {
    }
  	ngOnInit() {
        if(this.activeView){
          let subscriber = this.activeView.subscribe(
            value => this.toggle(value),
          );
        }

  	}

    /**
    * Toggle view amd redirect to sub route.
    * @function
    * @name toggle
    * @param {string} type
    *
    */
  	toggle(type){
  		if(type === 'card'){
  			this.isCardViewActive = true;
  			this.isListViewActive = false;
  		}else{
  			this.isCardViewActive = false;
  			this.isListViewActive = true;
  		}
  	}
}
