import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  private checkTest: string = "";
  checkedField = 0;
  checkFieldVisible = false;
  constructor() { }

  ngOnInit() {
  }

  isChecked(element: HTMLInputElement): void {
    element.checked ? this.checkedField++ : this.checkedField--;
    if(this.checkedField > 0){
      this.checkFieldVisible = true;
    }
    else {
      this.checkFieldVisible = false;
    }
  }

}
