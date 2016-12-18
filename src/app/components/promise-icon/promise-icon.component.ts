import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-promise-icon',
  templateUrl: './promise-icon.component.html',
  styleUrls: ['./promise-icon.component.scss']
})
export class PromiseIconComponent implements OnInit {
  @HostBinding("class.c-promise-icon") true;

  @HostBinding("class.c-promise-icon--promise")
  @Input() isPromising: boolean = false;

  @Input() iconName: string;

  constructor(
    private mockService: MockService
  ) { 
    mockService.fillInputs(this, {});
  }

  ngOnInit() {
    
  }

  public toggle() {
    this.isPromising = !this.isPromising;
  }

}
