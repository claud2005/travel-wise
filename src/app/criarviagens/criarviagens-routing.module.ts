import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarviagensPage } from './criarviagens.page';  // Certifique-se de que o caminho do componente está correto

const routes: Routes = [
  {
    path: '',
    component: CriarviagensPage  // O componente que será exibido quando acessar o caminho
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Importando a configuração de rotas para o módulo
  exports: [RouterModule],  // Expondo o roteamento para ser utilizado em outras partes do aplicativo
})
export class CriarviagensPageRoutingModule {}
