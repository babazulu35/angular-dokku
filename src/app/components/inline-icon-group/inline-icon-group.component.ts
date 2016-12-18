import { Component, OnInit, Input } from '@angular/core';
import {Performer} from '../../models/performer';
@Component({
  selector: 'app-inline-icon-group',
  templateUrl: './inline-icon-group.component.html',
  styleUrls: ['./inline-icon-group.component.scss']
})
export class InlineIconGroupComponent implements OnInit {
	@Input() performer: Performer;
  	constructor() { }

  	ngOnInit() {

  	}

}
