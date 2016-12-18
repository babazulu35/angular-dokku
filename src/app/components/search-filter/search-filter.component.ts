import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
	@Input() pills : Array<any>;
  	constructor() { }

  	ngOnInit() {
  	}

}
