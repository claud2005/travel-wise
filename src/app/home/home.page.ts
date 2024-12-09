import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  isDarkMode: boolean = false; // Propriedade para armazenar o estado do tema
  darkModeMediaQuery: MediaQueryList;



  constructor(private router : Router) {
    // Inicializa a media query para detectar o modo escuro
    this.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkMode = this.darkModeMediaQuery.matches; // Define o estado inicial
  }
  ngOnInit() {
    // Adiciona um listener para mudanças no modo escuro
    this.darkModeMediaQuery.addEventListener('change', this.handleDarkModeChange);
  }

  ngOnDestroy() {
    // Remove o listener ao destruir o componente
    this.darkModeMediaQuery.removeEventListener('change', this.handleDarkModeChange);
  }

  handleDarkModeChange = (event: MediaQueryListEvent) => {
    this.isDarkMode = event.matches; // Atualiza o estado com base na mudança
  };


  goToLogin() {
    this.router.navigate(["/login"]);
  }
}
