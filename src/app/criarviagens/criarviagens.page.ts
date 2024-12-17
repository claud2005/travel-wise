import { Component } from '@angular/core';

@Component({
  selector: 'app-criarviagens',
  templateUrl: './criarviagens.page.html',
  styleUrls: ['./criarviagens.page.scss'],
})
export class CriarviagensPage {
  goBack() {
    // Lógica para voltar
    console.log('Voltar para página anterior');
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
