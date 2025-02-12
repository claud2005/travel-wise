import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

interface Comment {
  id: string;
  text: string;
  createdBy: string;
  createdAt: Date;
}

interface Viagem {
  id: string;
  description: string;
  state: string;
  prop1: string; // Nome da viagem
  prop2: string; // Continente
  type: string;  // Tipo da viagem
  startAt?: Date | null; // Data de início da viagem
  endAt?: Date | null;   // Data de fim da viagem
  comments?: Comment[];  // Lista de comentários
}

@Component({
  selector: 'app-detalhes-viagem',
  templateUrl: './detalhes-viagem.page.html',
  styleUrls: ['./detalhes-viagem.page.scss'],
})
export class DetalhesViagemPage implements OnInit {
  viagem!: Viagem;
  commentForm!: FormGroup;
  apiUrl: string = 'https://mobile-api-one.vercel.app/api/travels'; // URL da API
  name: string = 'claudiofreitas@ipvc.pt'; // Seu nome de usuário
  password: string = '!1lN(XNx'; // Sua senha

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController
  ) {
    this.setUpCommentForm();
  }


  // Configuração do formulário de comentário
  setUpCommentForm() {
    this.commentForm = this.formBuilder.group({
      text: ['', [Validators.required]], // Texto do comentário
    });
  }

  // Função para carregar a viagem
  async loadViagem(viagemId: string) {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.name}:${this.password}`)}`,
    });
  
    try {
      this.viagem = await firstValueFrom(this.http.get<Viagem>(`${this.apiUrl}/${viagemId}`, { headers }));
    } catch (error: any) {
      console.error('Erro ao carregar viagem:', error);
    }
  }

  // Função para adicionar um comentário
  async addComment() {
    if (this.commentForm.valid) {
      const loading = await this.showLoading();

      const headers = new HttpHeaders({
        Authorization: `Basic ${btoa(`${this.name}:${this.password}`)}`,
      });

      const { text } = this.commentForm.value;
      const newComment: Comment = {
        id: this.generateUniqueId(),
        text,
        createdBy: this.name,
        createdAt: new Date(),
      };

      try {
        await firstValueFrom(this.http.post<Comment[]>(`${this.apiUrl}/${this.viagem.id}/comments`, newComment, { headers }));
        loading.dismiss();
        
        // Inicialize comments se estiver indefinido
        if (!this.viagem.comments) {
          this.viagem.comments = [];
        }
        
        this.viagem.comments.push(newComment);
        this.commentForm.reset();
        await this.presentToast('Comentário adicionado com sucesso! 💬', 'success');
      } catch (error: any) {
        loading.dismiss();
        await this.handleError(error);
      }
    } else {
      await this.presentToast('Comentário inválido!', 'danger');
    }
  }
  // Função para gerar um ID único para o comentário
    generateUniqueId(): string {
      return Math.random().toString(36).substr(2, 9);
    }
  
    // Função para exibir um indicador de carregamento
  // Função para exibir um indicador de carregamento
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando...',
      spinner: 'dots',
      showBackdrop: true,
    });

    loading.present();

    return loading;
  }

  // Função para exibir toast com uma mensagem
  async presentToast(message: string, color: 'success' | 'danger' | 'warning') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
      color: color,
    });

    await toast.present();
  }

  // Função para tratar erros de API
  async handleError(error: any) {
    if (error.error) {
      await this.presentToast(error.error, 'danger');
    } else {
      await this.presentToast('Ocorreu um erro inesperado.', 'danger');
    }
  }
  ngOnInit() {
    const viagemId = this.route.snapshot.paramMap.get('id');
    if (viagemId) {
      this.loadViagem(viagemId);
    }
  }
  // Função para voltar à página anterior
  goBack() {
    this.navCtrl.back();
  }
}