import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DetalhesViagemPageRoutingModule } from './detalhes-viagem-routing.module';
import { DetalhesViagemPage } from './detalhes-viagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DetalhesViagemPageRoutingModule
  ],
  declarations: [DetalhesViagemPage]
})
export class DetalhesViagemPageModule {}