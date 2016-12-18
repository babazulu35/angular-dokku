import { Component, OnInit } from '@angular/core';
import { PerformerService } from './../../services/performer.service';
import { Performer } from './../../models/performer';


@Component({
  selector: 'app-performers-list-view',
  templateUrl: './performers-list-view.component.html',
  styleUrls: ['./performers-list-view.component.scss'],
  providers: [PerformerService],
  host: {
    class: "app-performers-list-view"
  }
})
export class PerformersListViewComponent implements OnInit {
	performers : Performer[];
  	constructor(private performerService: PerformerService) { }

  	ngOnInit(): void {
  	}
    toggleSortTitle(sort : Object){
        console.log(sort);
    }
}
