import { Component, OnInit, EventEmitter, Output, Input, HostBinding } from '@angular/core';
import { MockService } from '../../services/mock.service';
@Component({
	selector: 'app-selectbox',
	templateUrl: './selectbox.component.html',
	styleUrls: ['./selectbox.component.scss'],
	providers: [MockService]
})
export class SelectboxComponent implements OnInit {
	@HostBinding('class') class = 'c-selectbox';
	@Output() selectBoxOnSelectAction : EventEmitter<boolean> = new EventEmitter<boolean>();
	@Input() options: Array<any>;

	constructor(private mockService: MockService ) {
		mockService.fillInputs(this, {isString:true});
		//mockService.fillInputs(this, {});
	}
  	ngOnInit() {
  	}
  	select(value){
  		this.selectBoxOnSelectAction.emit(value);
  	}

}
