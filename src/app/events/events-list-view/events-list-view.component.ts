import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-events-list-view',
  templateUrl: './events-list-view.component.html',
  styleUrls: ['./events-list-view.component.scss']
})
export class EventsListViewComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  }
  onCheck(checked: boolean){
    checked ? console.log("this is checked") : console.log("this is not checked");
  }
}
