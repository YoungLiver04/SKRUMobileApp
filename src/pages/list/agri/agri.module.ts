import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgriPage } from './agri';

@NgModule({
  declarations: [
    AgriPage,
  ],
  imports: [
    IonicPageModule.forChild(AgriPage),
  ],
  exports: [
    AgriPage
  ]
})
export class AgriPageModule {}
