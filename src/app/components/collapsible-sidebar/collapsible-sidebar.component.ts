import { Component, OnInit, ElementRef, HostBinding, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'app-collapsible-sidebar',
  templateUrl: './collapsible-sidebar.component.html',
  styleUrls: ['./collapsible-sidebar.component.scss']
})
export class CollapsibleSidebarComponent implements OnInit {
	@HostBinding('class') class = 'o-collapsible-container__aside';
	@HostBinding('class.o-collapsible-container__aside--expanded') isVisible: boolean = false;
	constructor(private renderer: Renderer) { }

	ngOnInit() {
	}
	toggle(){
		this.isVisible = !this.isVisible;
	}

}
