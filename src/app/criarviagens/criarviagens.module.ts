import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CriarviagensPageRoutingModule } from './criarviagens-routing.module';
import { CriarviagensPage } from './criarviagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarviagensPageRoutingModule
  ],
  declarations: [CriarviagensPage]
})
export class CriarviagensPageModule {}
