import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    
    this.router.navigate(['/perfil']);
  }
  
}
