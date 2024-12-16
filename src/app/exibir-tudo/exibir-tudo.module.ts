import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExibirTudoPageRoutingModule } from './exibir-tudo-routing.module';

import { ExibirTudoPage } from './exibir-tudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExibirTudoPageRoutingModule
  ],
  declarations: [ExibirTudoPage]
})
export class ExibirTudoPageModule {}
