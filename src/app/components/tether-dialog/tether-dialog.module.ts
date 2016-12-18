import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TetherDialog, TetherDialogContent, TetherDialogOverlay, TetherOptions} from './tether-dialog';
import {TetherDialogComponent} from './tether-dialog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TetherDialogComponent, TetherDialogContent, TetherDialogOverlay],
  exports: [TetherDialogComponent],
  providers: [TetherDialog]
})
export class TetherDialogModule {
  static forRoot(): ModuleWithProviders { return {ngModule: TetherDialogModule, providers: [TetherDialog]}; }
}
