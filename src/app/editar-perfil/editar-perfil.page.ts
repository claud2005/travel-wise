import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage {
  // Dados do usuário
  user = {
    nome: '',
    apelido: '',
    email: '',
    password: '',
    descricao: '',
  };

  constructor(private navCtrl: NavController) {}

  // Método para voltar à página anterior
  goBack() {
    this.navCtrl.back();
  }

  // Método para confirmar edição
  confirmarEdicao() {
    console.log('Dados atualizados:', this.user);
    // Aqui você pode adicionar lógica para salvar os dados
    alert('Perfil atualizado com sucesso!');
  }
}
