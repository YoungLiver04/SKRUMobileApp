import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SciPage } from './sci';

@NgModule({
  declarations: [
    SciPage,
  ],
  imports: [
    IonicPageModule.forChild(SciPage),
  ],
  exports: [
    SciPage
  ]
})
export class SciPageModule {}
