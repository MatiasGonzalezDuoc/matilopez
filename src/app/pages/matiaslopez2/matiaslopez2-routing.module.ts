import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Matiaslopez2Page } from './matiaslopez2.page';

const routes: Routes = [
  {
    path: '',
    component: Matiaslopez2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Matiaslopez2PageRoutingModule {}
