import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

interface Viagem {
  id: string;
  description: string;
  state: State;
  prop1: string; // Nome da viagem
  prop2: string; // Continente
  type: string;  // Tipo da viagem
  startAt?: Date | null; // Data de início da viagem
  endAt?: Date | null;   // Data de fim da viagem
  createdBy?: string;
  updatedBy?: string;
}

enum State {
  TODO = 'TODO', // Viagem futura
  DONE = 'DONE', // Viagem já efetuada
}

@Component({
  selector: 'app-criarviagens',
  templateUrl: './criarviagens.page.html',
  styleUrls: ['./criarviagens.page.scss'],
})
export class CriarviagensPage implements OnInit {
  viagem!: Viagem;
  apiUrl: string = 'https://mobile-api-one.vercel.app/api/travels'; // URL da API
  name: string = 'claudiofreitas@ipvc.pt'; // Seu nome de usuário
  password: string = '!1lN(XNx'; // Sua senha
  form!: FormGroup; // Formulário reativo

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private route: ActivatedRoute
  ) {
    this.setUpForm();
  }

  ngOnInit() {
    const viagemId = this.route.snapshot.paramMap.get('id');
    if (viagemId) {
      this.loadViagem(viagemId);
    }
  }

  // Configuração do formulário
  setUpForm() {
    this.form = this.formBuilder.group({
      description: ['', [Validators.required]], // Descrição da viagem
      state: [State.TODO, [Validators.required]], // Estado da viagem (TODO ou DONE)
      prop1: ['', [Validators.required]], // Nome da viagem
      prop2: ['', [Validators.required]], // Continente
      type: ['', [Validators.required]],  // Tipo da viagem
      startAt: [null], // Data de início
      endAt: [null],   // Data de fim
    });
  }

  // Função para carregar a viagem a ser editada
  async loadViagem(viagemId: string) {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.name}:${this.password}`)}`,
    });

    try {
      this.viagem = await firstValueFrom(this.http.get<Viagem>(`${this.apiUrl}/${viagemId}`, { headers }));
      this.form.patchValue(this.viagem);
    } catch (error: any) {
      console.error('Erro ao carregar viagem:', error);
    }
  }

  // Função para voltar à página anterior
  goBack() {
    this.navCtrl.back();
  }

  // Função para salvar a viagem (criar ou atualizar)
  async save() {
    if (this.form.valid) {
      if (this.viagem && this.viagem.id) {
        await this.updateViagem(this.form);
        return;
      }
      await this.createViagem(this.form);
      return;
    }
    await this.presentToast('Formulário inválido!', 'danger');
  }

  // Função para criar uma nova viagem
  async createViagem(form: FormGroup) {
    const loading = await this.showLoading();

    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.name}:${this.password}`)}`,
    });

    const { description, type, state, prop1, prop2, startAt, endAt } = form.value;
    const newViagem = {
      description,
      type,
      state,
      prop1,
      prop2,
      startAt: startAt ? new Date(startAt) : null,
      endAt: endAt ? new Date(endAt) : null,
      createdBy: this.name,
    };

    try {
      await firstValueFrom(this.http.post<Viagem[]>(this.apiUrl, newViagem, { headers }));
      loading.dismiss();
      await this.presentToast('Viagem criada com sucesso! ✈️', 'success');
      await this.goBack(); // Voltar para a página anterior após criação
    } catch (error: any) {
      loading.dismiss();
      await this.handleError(error);
    }
  }

  // Função para atualizar a viagem existente
  async updateViagem(form: FormGroup) {
    const loading = await this.showLoading();

    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.name}:${this.password}`)}`,
    });

    const { description, type, state, prop1, prop2, startAt, endAt } = form.value;
    const updatedViagem = {
      description,
      type,
      state,
      prop1,
      prop2,
      startAt: startAt ? new Date(startAt) : null,
      endAt: endAt ? new Date(endAt) : null,
      updatedBy: this.name,
    };

    try {
      await firstValueFrom(this.http.put<Viagem[]>(`${this.apiUrl}/${this.viagem.id}`, updatedViagem, { headers }));
      loading.dismiss();
      await this.presentToast('Viagem atualizada com sucesso! ✈️', 'success');
      await this.goBack(); // Voltar após a atualização
    } catch (error: any) {
      loading.dismiss();
      await this.handleError(error);
    }
  }

  // Função para tratar erros de API
  async handleError(error: any) {
    if (error.error) {
      await this.presentToast(error.error, 'danger');
    } else {
      await this.showAlert('Erro', 'Ocorreu um erro inesperado.');
    }
  }

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

  // Função para exibir um alerta
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Adicionando os métodos faltantes
  openMap() {
    console.log('Abrindo mapa...');
    // Implemente a lógica para abrir o mapa aqui
  }

  openImage() {
    console.log('Abrindo imagem...');
    // Implemente a lógica para abrir a imagem aqui
  }

  confirmarViagem() {
    console.log('Confirmando viagem...');
    this.save();
  }
}