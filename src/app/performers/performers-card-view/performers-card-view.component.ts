import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { PerformerService } from '../../services/performer.service';
import { Performer } from '../../models/performer';


@Component({
  selector: 'app-performers-card-view',
  templateUrl: './performers-card-view.component.html',
  styleUrls: ['./performers-card-view.component.scss'],
  providers: [PerformerService]
})
export class PerformersCardViewComponent implements OnInit {
	@ViewChild('card') card: ElementRef;
	@ViewChild('container') container: ElementRef;
	windowWidth: number = 0;
	blockWidth: number = 0;
	maxBoxPerRow: number = 0;
	width: any;	
	performers : Performer[];
  	constructor(
		  private performerService: PerformerService,
		  private renderer: Renderer
	) { }

  	ngOnInit(): void {
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
