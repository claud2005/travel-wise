import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  constructor(private navCtrl: NavController) {}

  // Voltar para a página anterior
  goBack() {
    this.navCtrl.back();
  }

  // Função para editar perfil
  editProfile() {
    console.log('Editar Perfil clicado');
    // Adicione a lógica de navegação ou edição aqui
  }

  // Função para logout
  logout() {
    console.log('Logout clicado');
    // Adicione a lógica de logout aqui
  }
}
