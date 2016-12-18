import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { MockService } from '../../services/mock.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
	@Input() totalItem : number;
	@Input() showItemPerPage : number;
	@Input() currentPage : number;
	@Output() transistPage : EventEmitter<boolean> = new EventEmitter<boolean>();
  @HostBinding('class') class = 'c-pagination';
	private maxPage : number;
	private collapseAfterPage : number = 5;
	private pages : number[];
	private hasPrevious : boolean;
	private hasNext : boolean;
	private isCollapsed : boolean = true;
    constructor(private mockService: MockService) {
        mockService.fillInputs(this, "source");
    }
  	ngOnInit() {
		this.currentPage = (this.currentPage && this.currentPage > 0) ? this.currentPage : 1;
        this.calculatePages();
  	}
  	calculatePages(){
  		this.maxPage = Math.ceil(this.totalItem / this.showItemPerPage);
  		let pages: number[] = [],
  			i : number = 1;
        if(this.maxPage < this.collapseAfterPage){
            this.isCollapsed = false;
        }
  		for(let page = (this.currentPage == 1 || !this.isCollapsed || this.currentPage - 1 <= 0) ? 1 : this.currentPage - 1; page <= this.maxPage; page++) {
  			if( !this.isCollapsed ) {
  				pages.push(page);
  			}else {
  				if(i < this.collapseAfterPage - 1){
  					pages.push(page);
  				}
  			}
			i++;
		}
        if(i < this.collapseAfterPage){
            if(this.collapseAfterPage - i == 1 && pages[0] - 1 > 0){
                pages.unshift(pages[0] - 1);
            }
            if(this.collapseAfterPage - i == 2 && pages[0] - 2 > 0 && pages[0] - 1 > 0){
                pages.unshift(pages[0] - 2,pages[0] - 1);
            }
        }
		this.hasPrevious = (this.currentPage == 1) ? false : true;
		this.hasNext = (this.currentPage == this.maxPage) ? false : true;
		this.pages = pages;
  	}
  	expand() : void {
  		this.isCollapsed = false;
  		this.calculatePages();
  	}
  	goToPage(page){
  		if(page !== this.currentPage && page > 0 && page <= this.maxPage){
  			this.currentPage = page;
  			this.transistPage.emit(page);
            this.calculatePages();
  		}
  	}
}
