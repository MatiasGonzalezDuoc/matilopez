import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatiaslopezPageRoutingModule } from './matiaslopez-routing.module';

import { MatiaslopezPage } from './matiaslopez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatiaslopezPageRoutingModule
  ],
  declarations: [MatiaslopezPage]
})
export class MatiaslopezPageModule {}
