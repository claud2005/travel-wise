import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CriarviagensPageRoutingModule } from './criarviagens-routing.module';  // O módulo de roteamento para CriarViagens
import { CriarviagensPage } from './criarviagens.page';  // O componente que será carregado

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CriarviagensPageRoutingModule  // Importando o módulo de roteamento para essa página
  ],
  declarations: [CriarviagensPage]  // Declarando o componente da página
})
export class CriarviagensPageModule {}
