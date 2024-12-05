import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './Login.page.html',
  styleUrls: ['./Login.page.scss'],
})
export class LoginPage {
  username: string = ''; // Inicializando as variáveis
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Usuário:', this.username);
    console.log('Senha:', this.password);
    
    // Exemplo de redirecionamento após login
    this.router.navigate(['/home']);
  }
}