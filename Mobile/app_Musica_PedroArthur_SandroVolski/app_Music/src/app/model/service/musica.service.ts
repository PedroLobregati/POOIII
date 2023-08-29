import { Injectable } from '@angular/core';
import Musica from '../entities/Musica';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  public lista_Musicas : Musica[] = [];

  constructor() {
  }

  cadastrar(Musica : Musica){
    this.lista_Musicas.push(Musica);
  }

  obterTodos() : Musica[]{
    return this.lista_Musicas;
  }

  obterPorIndice(indice : number) : Musica{
    return this.lista_Musicas[indice];
  }

  editar(indice: number, Musica: Musica){
    this.lista_Musicas[indice] = Musica;
  }

  excluir(indice: number){
    this.lista_Musicas.splice(indice, 1);
  }


}