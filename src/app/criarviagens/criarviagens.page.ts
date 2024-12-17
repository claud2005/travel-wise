import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importe o NavController


@Component({
  selector: 'app-criarviagens',
  templateUrl: './criarviagens.page.html',
  styleUrls: ['./criarviagens.page.scss'],
})
export class CriarviagensPage {
  constructor(private navCtrl: NavController) {} // Injete o NavController

  goBack() {
    // Lógica para voltar
    console.log('Voltar para página anterior');
    this.navCtrl.back(); // Método para voltar à página anterior
  }

  openMap() {
    console.log('Abrir mapa para selecionar localização');
  }

  openImage() {
    console.log('Abrir galeria para selecionar imagem');
  }

  confirmarViagem() {
    console.log('Viagem confirmada!');
  }

  goToViagens() {
    console.log('Navegar para Viagens');
  }

  goToHome() {
    console.log('Navegar para Principal');
  }

  goToPerfil() {
    console.log('Navegar para Perfil');
  }
}
