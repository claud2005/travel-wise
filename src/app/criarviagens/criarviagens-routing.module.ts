import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarviagensPage } from './criarviagens.page';

const routes: Routes = [
  {
    path: '',
    component: CriarviagensPage
  },
  {
    path: ':id',
    component: CriarviagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarviagensPageRoutingModule {}
