import { Component, OnInit,ElementRef,ViewChild,Renderer } from '@angular/core';

@Component({
  selector: 'app-venue-events-card-view',
  templateUrl: './venue-events-card-view.component.html',
  styleUrls: ['./venue-events-card-view.component.scss']
})
export class VenueEventsCardViewComponent implements OnInit {
	@ViewChild('card') card: ElementRef;
	@ViewChild('container') container: ElementRef;
	windowWidth: number = 0;
	blockWidth: number = 0;
	maxBoxPerRow: number = 0;
	width: any;  
  constructor(
     private renderer: Renderer
  ) { }

  pills : Array<any> = [{text:'AKTİF', count:3, id:3, isActive:false},{text:'PASİF', count:4, id:2, isActive:false},{text:'ARŞİV', count:24, id:3, isActive:false}];

  ngOnInit() {
  }
	// onResize(event) {
	// 	this.resize();
	// }
	// ngAfterViewInit() {
	// 	this.resize();
  //   }
	// resize(){
	// 	this.renderer.setElementStyle(this.container.nativeElement, 'width', 'auto');
	// 	this.windowWidth = this.container.nativeElement.offsetWidth;
	// 	this.blockWidth = this.card.nativeElement.offsetWidth + 10 ;
	// 	this.maxBoxPerRow = Math.floor(this.windowWidth / this.blockWidth);
	// 	this.width = (this.maxBoxPerRow * this.blockWidth + 16) + 'px';
	// 	this.renderer.setElementStyle(this.container.nativeElement, 'width', this.width);
	// } 
   

}
