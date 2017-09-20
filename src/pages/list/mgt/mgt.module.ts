import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MgtPage } from './mgt';
import { IonicStorageModule } from '@ionic/storage';

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
