import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Matiaslopez2PageRoutingModule } from './matiaslopez2-routing.module';

import { Matiaslopez2Page } from './matiaslopez2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Matiaslopez2PageRoutingModule
  ],
  declarations: [Matiaslopez2Page]
})
export class Matiaslopez2PageModule {}
