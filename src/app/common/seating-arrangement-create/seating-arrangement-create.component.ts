import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { TetherDialog } from '../../components/tether-dialog/tether-dialog';

@Component({
  selector: 'app-seating-arrangement-create',
  templateUrl: './seating-arrangement-create.component.html',
  styleUrls: ['./seating-arrangement-create.component.scss']
})
export class SeatingArrangementCreateComponent implements OnInit {
  @HostBinding('class')
  private _class:string = "oc-seating-arrangement-create";

  get totalLevel():number { return this._totalLevel };

  get level():number { return this._level };
  set level(value:number) {
    this._level = value;
    if(this._level > this._totalLevel) this._level = this._totalLevel;
    if(this._level < 1) this._level = 1;
    this._tetherService.position();
  }

  get tetherService():TetherDialog { return this._tetherService }

  private _level:number = 1;
  private _totalLevel:number = 4;

  constructor(
    private _tetherService:TetherDialog
  ) { }

  ngOnInit() {
  }

  forward() {
    this.level++;
  }

  back() {
    this.level--;
  }

  historyClickHandler(){
    this.back();
  }

}
