import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarviagensPage } from './criarviagens.page';

const routes: Routes = [
  {
    path: '',
    component: CriarviagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarviagensPageRoutingModule {}
