import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExibirTudoPage } from './exibir-tudo.page';

const routes: Routes = [
  {
    path: '',
    component: ExibirTudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExibirTudoPageRoutingModule {}
