import { Component, OnInit, HostBinding } from '@angular/core';
import { TetherDialog } from '../../components/tether-dialog/tether-dialog';

@Component({
  selector: 'app-performer-create',
  templateUrl: './performer-create.component.html',
  styleUrls: ['./performer-create.component.scss']
})
export class PerformerCreateComponent implements OnInit {
  @HostBinding() class = "oc-performer-create";
  private _tetherService: TetherDialog;

  public get tetherService():TetherDialog {
    return this._tetherService;
  }

  constructor(_tetherService: TetherDialog) { 
    this._tetherService = _tetherService;
  }

  ngOnInit() {
  }

}
