import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue-events',
  templateUrl: './venue-events.component.html',
  styleUrls: ['./venue-events.component.scss']
})
export class VenueEventsComponent implements OnInit {

  constructor() { }

  tabs :  Array<any> = [{text:'TEK GÜNLÜ ETKİNLİKLER', route: '', isActive:true},{text:'ÇOK GÜNLÜ ETKİNLİKLER', route: '', isActive:false},{text:'ÇATI ETKİNLİKLERİ', route: '', isActive:false}];

  ngOnInit() {
  }
  
	ngAfterViewInit() {

    }  

}
