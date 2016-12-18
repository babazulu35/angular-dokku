import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number-stepper',
  templateUrl: './number-stepper.component.html',
  styleUrls: ['./number-stepper.component.scss']
})
export class NumberStepperComponent implements OnInit {
  @Input() label;

  constructor() { }

  ngOnInit() {
  }

}
