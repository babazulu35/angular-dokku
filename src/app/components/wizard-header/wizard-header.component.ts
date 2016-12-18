import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wizard-header',
  templateUrl: './wizard-header.component.html',
  styleUrls: ['./wizard-header.component.scss'],
  host: {
    class: "c-wizard-header"
  }
})
export class WizardHeaderComponent implements OnInit {
  @Input() currentLevel: number;
  @Input() totalLevel: number;
  @Output() historyClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  history() {
    this.historyClicked.emit();
  }
}
