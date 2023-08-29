import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Musica from 'src/app/model/entities/Musica';
import { MusicaService } from 'src/app/model/service/musica.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './atualizar.page.html',
  styleUrls: ['./atualizar.page.scss'],
})
export class AtualizarPage implements OnInit {
  nome!: string;
  genero!: string;
  banda!: string;
  musica!: Musica;
  anoLancamento!: number;
  album!: string;
  indice!: number;
  edicao: boolean = true;

  constructor(private actRoute : ActivatedRoute,
    private router: Router,
    private contatoService: MusicaService) { }

  ngOnInit() {
    this.actRoute.params.subscribe((parametros) => {
      if(parametros["indice"]){
       this.indice = parametros["indice"];
       this.musica = this.contatoService.obterPorIndice(this.indice);
      }
    })
    this.nome = this.musica.nome;
    this.banda = this.musica.banda;
    this.anoLancamento = this.musica.anoLancamento;
    this.album = this.musica.album;
    this.genero = this.musica.genero;
  }

  habilitar(){
    if(this.edicao){
      this.edicao = false;
    }else{
      this.edicao = true;
    }
  }

  editar(){
    let novo: Musica = new Musica(this.nome, this.banda, this.anoLancamento, this.album, this.genero);
    this.contatoService.editar(this.indice, novo);
    this.router.navigate(["/home"]);
  }

  excluir(){
    this.contatoService.excluir(this.indice);
    this.router.navigate(["/home"]);
  }

}