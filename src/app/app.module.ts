import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { TetherDialogModule } from './components/tether-dialog/tether-dialog.module'; //Module

import { AppComponent } from './app.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { CoverImageComponent } from './components/cover-image/cover-image.component';
import { InlineSearchInputComponent } from './components/inline-search-input/inline-search-input.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { OverImageStatsComponent } from './components/over-image-stats/over-image-stats.component';
import { PillGroupComponent } from './components/pill-group/pill-group.component';
import { ResponsiveTableComponent } from './components/responsive-table/responsive-table.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { CollapsibleSidebarComponent } from './components/collapsible-sidebar/collapsible-sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SelectboxComponent } from './components/selectbox/selectbox.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DataSourceListComponent } from './components/data-source-list/data-source-list.component';
import { ExprListPagerComponent } from './components/expr-list-pager/expr-list-pager.component';
import { FieldSearchBarComponent } from './components/field-search-bar/field-search-bar.component';
import { HeaderInlineEditComponent } from './components/header-inline-edit/header-inline-edit.component';
import { HeaderSearchBarComponent } from './components/header-search-bar/header-search-bar.component';
import { InlineIconGroupComponent } from './components/inline-icon-group/inline-icon-group.component';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';
import { ModalPinComponent } from './components/modal-pin/modal-pin.component';
import { ModalSearchBoxComponent } from './components/modal-search-box/modal-search-box.component';
import { MultiSelectionBarComponent } from './components/multi-selection-bar/multi-selection-bar.component';
import { NarrowIndexComponent } from './components/narrow-index/narrow-index.component';
import { NumberStepperComponent } from './components/number-stepper/number-stepper.component';
import { PrimaryColumnLineComponent } from './components/primary-column-line/primary-column-line.component';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { PromiseIconComponent } from './components/promise-icon/promise-icon.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { SidebarTitleComponent } from './components/sidebar-title/sidebar-title.component';
import { SliderInputComponent } from './components/slider-input/slider-input.component';
import { SortTitleComponent } from './components/sort-title/sort-title.component';
import { SortViewComponent } from './components/sort-view/sort-view.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { ModalSubHeadingComponent } from './components/modal-sub-heading/modal-sub-heading.component';
import { MultiSelectGroupComponent } from './components/multi-select-group/multi-select-group.component';
import { ContainerCanvasComponent } from './components/container-canvas/container-canvas.component';
import { IconGridComponent } from './components/icon-grid/icon-grid.component';
import { VenuesComponent } from './venues/venues.component';
import { VenuesListViewComponent } from './venues/venues-list-view/venues-list-view.component';
import { VenuesCardViewComponent } from './venues/venues-card-view/venues-card-view.component';
import { PerformersComponent } from './performers/performers.component';
import { PerformersListViewComponent } from './performers/performers-list-view/performers-list-view.component';
import { PerformersCardViewComponent } from './performers/performers-card-view/performers-card-view.component';
import { EventsComponent } from './events/events.component';
import { VenueComponent } from './venue/venue.component';
import { VenueEventsComponent } from './venue/venue-events/venue-events.component';
import { VenueEventsCardViewComponent } from './venue/venue-events/venue-events-card-view/venue-events-card-view.component';
import { VenueEventsListViewComponent } from './venue/venue-events/venue-events-list-view/venue-events-list-view.component';
import { VenueLayoutsComponent } from './venue/venue-layouts/venue-layouts.component';
import { VenueEventsCalendarComponent } from './venue/venue-events-calendar/venue-events-calendar.component';
import { VenueMediaMaterialsComponent } from './venue/venue-media-materials/venue-media-materials.component';
import { EventComponent } from './event/event.component';
import { EventsCardViewComponent } from './events/events-card-view/events-card-view.component';
import { EventsListViewComponent } from './events/events-list-view/events-list-view.component';
import { ModalWizardComponent } from './components/modal-wizard/modal-wizard.component';
import { SeatingArrangementCreateComponent } from './common/seating-arrangement-create/seating-arrangement-create.component';
import { WizardHeaderComponent } from './components/wizard-header/wizard-header.component';
import { HrefDirective } from './directives/href.directive';
import { PerformerCreateComponent } from './common/performer-create/performer-create.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { FeedbackFormComponent } from './common/feedback-form/feedback-form.component';
import { IndexComponent } from './index/index.component';
import { HeaderTitleService } from './services/header-title.service';
import { MockService } from './services/mock.service';
import { VenueCreateComponent } from './venue/venue-create/venue-create.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    VenueComponent,
    TabBarComponent,
    ContextMenuComponent,
    CoverImageComponent,
    InlineSearchInputComponent,
    MainMenuComponent,
    OverImageStatsComponent,
    PillGroupComponent,
    ResponsiveTableComponent,
    SearchFilterComponent,
    CollapsibleSidebarComponent,
    HeaderComponent,
    PaginationComponent,
    SelectboxComponent,
    CardItemComponent,
    AddButtonComponent,
    AvatarComponent,
    ButtonComponent,
    CheckboxComponent,
    DataSourceListComponent,
    ExprListPagerComponent,
    FieldSearchBarComponent,
    HeaderInlineEditComponent,
    HeaderSearchBarComponent,
    InlineIconGroupComponent,
    LightSwitchComponent,
    ModalPinComponent,
    ModalSearchBoxComponent,
    MultiSelectionBarComponent,
    NarrowIndexComponent,
    NumberStepperComponent,
    PrimaryColumnLineComponent,
    ProfilePhotoComponent,
    PromiseIconComponent,
    RadioButtonComponent,
    SidebarTitleComponent,
    SliderInputComponent,
    SortTitleComponent,
    SortViewComponent,
    TypeaheadComponent,
    VenuesComponent,
    EventsComponent,
    PerformersComponent,
    PerformersListViewComponent,
    PerformersCardViewComponent,
    EventsComponent,
    VenueComponent,
    VenueEventsComponent,
    VenueEventsCardViewComponent,
    VenueEventsListViewComponent,
    VenueLayoutsComponent,
    VenueEventsCalendarComponent,
    VenueMediaMaterialsComponent,
    EventComponent,
    EventsCardViewComponent,
    EventsListViewComponent,
    ModalSubHeadingComponent,
    MultiSelectGroupComponent,
    IconGridComponent,
    ContainerCanvasComponent,
    ModalWizardComponent,
    SeatingArrangementCreateComponent,
    WizardHeaderComponent,
    HrefDirective,
    PerformerCreateComponent,
    DialogBoxComponent,
    PerformerCreateComponent,
    VenuesListViewComponent,
    VenuesCardViewComponent,
    FeedbackFormComponent,
    PerformerCreateComponent,
    IndexComponent,
    VenueCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TetherDialogModule.forRoot()
  ],
  providers: [HeaderTitleService, MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
