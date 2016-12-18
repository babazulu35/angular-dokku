import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

import {TetherDialog} from '../../components/tether-dialog/tether-dialog';
import { SeatingArrangementCreateComponent } from '../../common/seating-arrangement-create/seating-arrangement-create.component';

@Component({
  selector: 'app-venue-layouts',
  templateUrl: './venue-layouts.component.html',
  styleUrls: ['./venue-layouts.component.scss'],
  entryComponents: [SeatingArrangementCreateComponent]
})
export class VenueLayoutsComponent implements OnInit {

  constructor(
    private resolver: ComponentFactoryResolver,
    private _tetherService: TetherDialog
  ) { }

  ngOnInit() {
  }

  openSeatingArrangementCreate() {
    this._tetherService.modal(this.resolver.resolveComponentFactory(SeatingArrangementCreateComponent), {
      dialog: {
        style: {
          width: "50vw",
          height: "auto"
        }
      },
      dismissConfirm: true
    }).then(result => {
      console.log("promise result : ", result);
    }).catch(reason => {
      console.log("dismiss reason : ", reason);
    });
  }
}
