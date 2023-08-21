import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public lista_contatos : Contato[] = [];

  constructor(private contatoService: ContatoService,
    private router: Router) {
      this.lista_contatos = this.contatoService.obterTodos();
  }

  irParaCadastrar(){
    this.router.navigate(["/cadastrar"]);
  }

}
