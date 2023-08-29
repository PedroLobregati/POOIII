import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Musica from 'src/app/model/entities/Musica';
import { MusicaService } from 'src/app/model/service/musica.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public lista_musicas : Musica[] = [];

  constructor(private MusicaService : MusicaService,
    private router : Router) {
      this.lista_musicas = this.MusicaService.obterTodos();
    }


  irParaCadastrar(){
    this.router.navigate(["/cadastrar"]);
  }

  editar(index : number){
    this.router.navigate(["/atualizar", index]);
  }

}