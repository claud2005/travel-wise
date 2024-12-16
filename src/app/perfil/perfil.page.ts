import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importando o Router
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  userDescription: string = 'Descrição do usuário'; // Valor inicial da descrição

  constructor(
    private navCtrl: NavController,
    private router: Router  // Adicionando o Router aqui
  ) {}

  // Função para voltar à página anterior
  goBack() {
    this.navCtrl.back();
  }

  // Função para editar perfil
  editProfile() {
    console.log('Editar Perfil clicado');
    // Usando o Router para navegar para a página de editar-perfil
    this.router.navigate(['/editar-perfil']);
  }

  // Função para logout
  logout() {
    console.log('Logout clicado');
    // Adicione a lógica de logout aqui
  }
}
