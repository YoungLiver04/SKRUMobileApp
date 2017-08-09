import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MgtPage } from './mgt';

@NgModule({
  declarations: [
    MgtPage,
  ],
  imports: [
    IonicPageModule.forChild(MgtPage),
  ],
  exports: [
    MgtPage
  ]
})
export class MgtPageModule {}
