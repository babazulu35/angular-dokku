import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { EventsComponent } from './events/events.component';
import { EventsCardViewComponent } from './events/events-card-view/events-card-view.component';
import { EventsListViewComponent } from './events/events-list-view/events-list-view.component';
import { EventComponent } from './event/event.component';

import { VenuesComponent } from './venues/venues.component';
import { VenuesListViewComponent } from './venues/venues-list-view/venues-list-view.component';
import { VenuesCardViewComponent } from './venues/venues-card-view/venues-card-view.component';
import { VenueComponent } from './venue/venue.component';
import { VenueCreateComponent } from './venue/venue-create/venue-create.component';
import { VenueEventsComponent } from './venue/venue-events/venue-events.component';
import { VenueEventsCardViewComponent } from './venue/venue-events/venue-events-card-view/venue-events-card-view.component';
import { VenueEventsListViewComponent } from './venue/venue-events/venue-events-list-view/venue-events-list-view.component';

import { VenueLayoutsComponent } from './venue/venue-layouts/venue-layouts.component';
import { VenueEventsCalendarComponent } from './venue/venue-events-calendar/venue-events-calendar.component';
import { VenueMediaMaterialsComponent } from './venue/venue-media-materials/venue-media-materials.component';

import { PerformersComponent } from './performers/performers.component';
import { PerformersCardViewComponent } from './performers/performers-card-view/performers-card-view.component';
import { PerformersListViewComponent } from './performers/performers-list-view/performers-list-view.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'events', component: EventsComponent,
    children: [
        { path: 'list', component: EventsListViewComponent },
        { path: 'card', component: EventsCardViewComponent },
    ]
  },
  { path: 'event/:id', component: EventComponent },
  { path: 'venues', component: VenuesComponent,
      children: [
        { path: 'list', component: VenuesListViewComponent },
        { path: 'card', component: VenuesCardViewComponent },
        { path: '', component: VenuesCardViewComponent },
      ]
  },
  { path: 'venue/create', component: VenueCreateComponent },
  { path: 'venue/:id', component: VenueComponent,
   	children: [
		{ path: 'events', component: VenueEventsComponent,
            children: [
                { path: 'list', component: VenueEventsListViewComponent },
                { path: 'card', component: VenueEventsCardViewComponent },
                { path: '', component: VenueEventsCardViewComponent },
            ]
        },
        { path: 'layouts', component: VenueLayoutsComponent},
        { path: 'events-calendar', component: VenueEventsCalendarComponent},
        { path: 'media-materials', component: VenueMediaMaterialsComponent},
    ]
  },
  { path: 'performers', component: PerformersComponent,
    children: [
          { path: 'list', component: PerformersListViewComponent },
          { path: 'card', component: PerformersCardViewComponent },
        ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}