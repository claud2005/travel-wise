import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface Viagem {
  id: string;
  description: string;
  state: string;
  prop1: string; // Nome da viagem
  prop2: string; // Continente
  type: string;  // Tipo da viagem
  startAt?: Date | null; // Data de início da viagem
  endAt?: Date | null;   // Data de fim da viagem
}

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {
  viagens: Viagem[] = [];
  filteredViagens: Viagem[] = [];
  apiUrl: string = 'https://mobile-api-one.vercel.app/api/travels'; // URL da API
  name: string = 'claudiofreitas@ipvc.pt'; // Seu nome de usuário
  password: string = '!1lN(XNx'; // Sua senha

  constructor(private navCtrl: NavController, private http: HttpClient) {}

  ngOnInit() {
    this.loadViagens();
  }

  // Função para buscar as viagens da API
  async loadViagens() {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.name}:${this.password}`)}`,
    });

    try {
      this.viagens = await firstValueFrom(this.http.get<Viagem[]>(this.apiUrl, { headers }));
      this.filteredViagens = this.viagens;
    } catch (error: any) {
      console.error('Erro ao buscar viagens:', error);
    }
  }

  // Função para deletar uma viagem
  async deleteViagem(viagemId: string) {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.name}:${this.password}`)}`,
    });

    try {
      await firstValueFrom(this.http.delete(`${this.apiUrl}/${viagemId}`, { headers }));
      this.viagens = this.viagens.filter(viagem => viagem.id !== viagemId);
      this.filteredViagens = this.viagens;
      console.log('Viagem deletada com sucesso!');
    } catch (error: any) {
      console.error('Erro ao deletar viagem:', error);
    }
  }

  // Função para editar uma viagem
  editViagem(viagemId: string) {
    this.navCtrl.navigateForward(`/criarviagens/${viagemId}`);
  }

  // Função para filtrar as viagens com base no texto de pesquisa
  filterViagens(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm && searchTerm.trim() !== '') {
      this.filteredViagens = this.viagens.filter(viagem => {
        return (
          viagem.prop1.toLowerCase().includes(searchTerm) ||
          viagem.description.toLowerCase().includes(searchTerm) ||
          viagem.type.toLowerCase().includes(searchTerm) ||
          viagem.state.toLowerCase().includes(searchTerm) ||
          viagem.prop2.toLowerCase().includes(searchTerm)
        );
      });
    } else {
      this.filteredViagens = this.viagens;
    }
  }

  // Função para voltar à página anterior
  goBack() {
    this.navCtrl.back();
  }
}