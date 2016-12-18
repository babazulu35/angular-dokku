import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @HostBinding('class.c-avatar') true;
  
  @Input() 
  size: string = 'autosize';

  @HostBinding('class.c-avatar--autosize') 
  get isAutosize(){
    return this.size == "autosize";
  }
  @HostBinding('class.c-avatar--lg') 
  get isLg(){
    return this.size == "lg";
  }
  @HostBinding('class.c-avatar--md') 
  get isMd(){
    return this.size == "md";
  }
  @HostBinding('class.c-avatar--sm') 
  get isSm(){
    return this.size == "sm";
  }
  @HostBinding('class.c-avatar--circle') 
  
  @Input() isCircle = true;
  @Input() source: string;

  @HostBinding('class.c-avatar--has-icon')
  @Input('icon') iconName: string;

  @HostBinding('class.c-avatar--has-letters')
  @Input() letters: string;

  constructor(mockService: MockService) {
    mockService.fillInputs(this, "source");
  }

  ngOnInit() {
  }

}
