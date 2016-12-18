import { Component, OnInit, ComponentFactory, ComponentFactoryResolver, Injector } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TetherDialog } from '../components/tether-dialog/tether-dialog';

@Component({
  	selector: 'app-index',
  	templateUrl: './index.component.html',
  	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  	constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resolver: ComponentFactoryResolver,
        private injector: Injector,
        private _tetherService: TetherDialog,
    ) { }

  ngOnInit() {
  }
}
