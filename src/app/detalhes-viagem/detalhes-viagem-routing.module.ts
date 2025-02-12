import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesViagemPage } from './detalhes-viagem.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesViagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesViagemPageRoutingModule {}