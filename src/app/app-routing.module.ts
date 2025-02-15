import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Direciona a rota padrão para a home
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./editar-perfil/editar-perfil.module').then(m => m.EditarPerfilPageModule)
  },
  {
    path: 'viagens',
    loadChildren: () => import('./viagens/viagens.module').then(m => m.ViagensPageModule)
  },
  {
    path: 'criarviagens',
    loadChildren: () => import('./criarviagens/criarviagens.module').then(m => m.CriarviagensPageModule)
  },
  {
    path: 'detalhes-viagem/:id',
    loadChildren: () => import('./detalhes-viagem/detalhes-viagem.module').then(m => m.DetalhesViagemPageModule)
  },
  {
    path: '**',  // Esta rota é uma rota de "catch-all" para páginas não encontradas
    redirectTo: 'home'  // Redireciona para a home se uma página não for encontrada
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
