import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import {CardItemComponent} from '../../components/card-item/card-item.component';

@Component({
  selector: 'app-events-card-view',
  templateUrl: './events-card-view.component.html',
  styleUrls: ['./events-card-view.component.scss'],
  entryComponents: [CardItemComponent]
})
export class EventsCardViewComponent implements OnInit {

	@ViewChild('card') card: ElementRef;
	@ViewChild('container') container: ElementRef;
	windowWidth: number = 0;
	blockWidth: number = 0;
	maxBoxPerRow: number = 0;
	width: any;
	constructor(
      private renderer: Renderer
    ) {}
	ngOnInit() {
	}
	onResize(event) {
		this.resize();
	}
	ngAfterViewInit() {
		this.resize();
    }
	resize(){
		this.renderer.setElementStyle(this.container.nativeElement, 'width', 'auto');
		this.windowWidth = this.container.nativeElement.offsetWidth;
		this.blockWidth = this.card.nativeElement.offsetWidth + 20 ;
		this.maxBoxPerRow = Math.floor(this.windowWidth / this.blockWidth);
		this.width = (this.maxBoxPerRow * this.blockWidth + 16) + 'px';
		this.renderer.setElementStyle(this.container.nativeElement, 'width', this.width);
	}

}
