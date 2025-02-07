import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViagensPageRoutingModule } from './viagens-routing.module';
import { ViagensPage } from './viagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViagensPageRoutingModule  // Certifique-se de que este módulo de roteamento existe e está correto
  ],
  declarations: [ViagensPage]
})
export class ViagensPageModule {}
