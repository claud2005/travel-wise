import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage {
  constructor(private navCtrl: NavController) {}

  // Função para voltar à página anterior
  goBack() {
    this.navCtrl.back();
  }
}
