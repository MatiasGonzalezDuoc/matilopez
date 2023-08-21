import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatiaslopezPage } from './matiaslopez.page';

const routes: Routes = [
  {
    path: '',
    component: MatiaslopezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatiaslopezPageRoutingModule {}
