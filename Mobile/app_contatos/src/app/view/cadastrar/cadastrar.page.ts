import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public nome! : string;
  public telefone! : number;
  public email? : string;
  public lista_contatos : Contato[] = [];

  constructor(private alertController : AlertController, private contatoService: ContatoService, private router: Router) { 

  }

  cadastrar(){
    if(this.nome && this.telefone){
      let novo : Contato = new Contato(this.nome, this.telefone, this.email == null ? " " : this.email)
      this.lista_contatos.push(novo)
      this.contatoService.cadastrar(novo)
      this.router.navigate(["/home"]);
    }else{
      this.presentAlert("Erro", "Campos Obrigatórios!");
    }
  }

  ngOnInit(){
      
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Agenda de contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
