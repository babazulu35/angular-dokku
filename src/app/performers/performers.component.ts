import { Component, OnInit, ComponentFactory, ComponentFactoryResolver, Injector } from '@angular/core';
import { PerformerService } from './../services/performer.service';
import { HeaderTitleService } from './../services/header-title.service';
import { Performer } from './../models/performer';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TetherDialog } from '../components/tether-dialog/tether-dialog';
import { PerformerCreateComponent } from '../common/performer-create/performer-create.component';

@Component({
  selector: 'app-performers',
  templateUrl: './performers.component.html',
  styleUrls: ['./performers.component.scss'],
  providers: [PerformerService],
  entryComponents: [ PerformerCreateComponent ],
})
export class PerformersComponent implements OnInit {
	tabs :  Array<any> = [{text:'MÜZİSYENLER', route: '', isActive:true},{text:'OYUNCULAR', route: '', isActive:false},{text:'DİĞER', route: '', isActive:false}];
	performers : Performer[];
	activeView : any;
	private sub: any;
  	constructor(
        private performerService: PerformerService,
        private headerTitleService:HeaderTitleService,
        private route: ActivatedRoute,
        private router: Router,
        private resolver: ComponentFactoryResolver,
        private injector: Injector,
        private _tetherService: TetherDialog,
    ) {
      		this.activeView = new Observable(observer => {
      			router.events.subscribe((val) => {
    	  			if(val instanceof NavigationEnd){
    	  				this.sub = this.route.children[0].url.subscribe(params => {
    	  					observer.next(params[0].path);
    	  				});
      				}
        		});
        	});
  	}
  	ngOnInit(): void {
  		this.headerTitleService.setTitle('Sanatçılar');
  	}
    openNewPerformerDrawer() {
        this._tetherService.drawer(this.resolver.resolveComponentFactory(PerformerCreateComponent),{}).then(result => {
          console.log("promise result : ", result);
        }).catch(reason => {
          console.log("dismiss reason : ", reason);
        });
    }
}
