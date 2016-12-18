import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { HeaderTitleService } from '../services/header-title.service';
import { TetherDialog } from '../components/tether-dialog/tether-dialog';
declare var beetle: any;
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
	constructor(
        private renderer: Renderer,
        private headerTitleService:HeaderTitleService,

    ) {}
	  pills : Array<any> = [{text:'AKTİF', count:3, id:3, isActive:false},{text:'PASİF', count:4, id:2, isActive:false},{text:'ARŞİV', count:24, id:3, isActive:false}];
    tabs :  Array<any> = [{text:'TEK GÜNLÜ ETKİNLİKLER', route: '', isActive:true},{text:'ÇOK GÜNLÜ ETKİNLİKLER', route: '', isActive:false},{text:'ÇATI ETKİNLİKLERİ', route: '', isActive:false}];
	ngOnInit(): void {
    this.headerTitleService.setTitle('Etkinlikler');
	}
	onResize(event) {

	}
	ngAfterViewInit() {

    }

}
