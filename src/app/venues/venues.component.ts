import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../services/header-title.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss']
})
export class VenuesComponent implements OnInit {

  constructor(
    private headerTitleService:HeaderTitleService,
  ) { }
  tabs :  Array<any> = [{text:'TEK GÜNLÜ ETKİNLİKLER', route: '', isActive:true},{text:'ÇOK GÜNLÜ ETKİNLİKLER', route: '', isActive:false},{text:'ÇATI ETKİNLİKLERİ', route: '', isActive:false}];
  ngOnInit(): void {
    this.headerTitleService.setTitle('Mekanlar');
  }

}
