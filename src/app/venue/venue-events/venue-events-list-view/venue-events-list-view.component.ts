import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-venue-events-list-view',
  templateUrl: './venue-events-list-view.component.html',
  styleUrls: ['./venue-events-list-view.component.scss']
})
export class VenueEventsListViewComponent implements OnInit {
	parentRouteId : number;
	page : number;
    private subscribe : any;
    private queryParamSub : any;
	constructor(private router:Router, private route: ActivatedRoute) { }

	pills : Array<any> = [{text:'AKTİF', count:3, id:3, isActive:false},{text:'PASİF', count:4, id:2, isActive:false},{text:'ARŞİV', count:24, id:3, isActive:false}];
    tabs :  Array<any> = [{text:'TEK GÜNLÜ ETKİNLİKLER', route: '', isActive:true},{text:'ÇOK GÜNLÜ ETKİNLİKLER', route: '', isActive:false},{text:'ÇATI ETKİNLİKLERİ', route: '', isActive:false}];

  	selectBoxOnSelectAction(value){
  		console.log(value);
	}
	ngOnInit() {
		this.subscribe = this.route.parent.parent.params.subscribe(params => {
            this.parentRouteId = +params["id"];
        });
        this.queryParamSub = this.route.params.subscribe(param => {
        	this.page = param['page'];
      	});
	}
	transistPage(page){
		this.router.navigate(['/venue', this.parentRouteId, 'events', 'list', { page:page }]);
	}
	ngOnDestroy() {
    	this.subscribe.unsubscribe();
    	this.queryParamSub.unsubscribe();

  	}

}
