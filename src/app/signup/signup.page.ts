import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) {}
  
  ngOnInit(): void {
  }
  goBack() {
    this.navCtrl.back(); // Navega para a página anterior
  }

  login() {
    // Lógica de login aqui
  }
}


