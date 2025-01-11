import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViagensPage } from './viagens.page';

const routes: Routes = [
  {
    path: '',
    component: ViagensPage  // Página ViagensPage será carregada na rota raiz dessa página
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Carrega as rotas específicas para esta página
  exports: [RouterModule],  // Exporta as rotas para serem usadas no módulo de página
})
export class ViagensPageRoutingModule {}
