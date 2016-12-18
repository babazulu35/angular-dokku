import { Component, OnInit, Input, ElementRef, ViewChild, Renderer, HostBinding } from '@angular/core';
import { MockService } from '../../services/mock.service';
@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss']
})
export class ProfilePhotoComponent implements OnInit {
	@Input() source : string;
    @HostBinding('class') class = 'c-profile-photo';
    @HostBinding('class.c-profile-photo--empty')
    get isEmpty(){
      return (this.source) ? false : true;
    }
	@ViewChild('avatarPhotoInput') avatarPhotoInput: ElementRef;
  	constructor(private renderer: Renderer, private mockService: MockService) {
        mockService.fillInputs(this, "source");
    }
  	ngOnInit() {

  	}
  	addNewPhoto(){
  		this.renderer.invokeElementMethod(this.avatarPhotoInput.nativeElement, 'click', []);
  	}
  	removePhoto(){
  		this.source = undefined;
  	}

}
