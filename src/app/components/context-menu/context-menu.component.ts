import { Component, OnInit } from '@angular/core';
import { TetherDialog } from '../tether-dialog/tether-dialog';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {
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
