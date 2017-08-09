import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HusoPage } from './huso';

@NgModule({
  declarations: [
    HusoPage,
  ],
  imports: [
    IonicPageModule.forChild(HusoPage),
  ],
  exports: [
    HusoPage
  ]
})
export class HusoPageModule {}
