import { Component, OnInit } from '@angular/core';
import { TetherDialog } from '../tether-dialog/tether-dialog';

@Component({
  selector: 'app-header-search-bar',
  templateUrl: './header-search-bar.component.html',
  styleUrls: ['./header-search-bar.component.scss']
})
export class HeaderSearchBarComponent implements OnInit {
  private _tetherService: TetherDialog;

  public get tetherService():TetherDialog {
    return this._tetherService;
  }

  constructor(_tetherService: TetherDialog) { 
    this._tetherService = _tetherService;
  }

  ngOnInit() {
  }

  public submit() {
    let result = {
      status: "Sent from Header search bar"
    };
    this.tetherService.close(result);
  }

}
