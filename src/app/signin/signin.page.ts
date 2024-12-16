import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private navCtrl: NavController) {}
  
  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Senha:', this.password);
    this.router.navigate(['/index']);
  }
  goBack() {
    this.navCtrl.back(); // Navega para a página anterior
  }

  login() {
    // Lógica de login aqui
  }
}


