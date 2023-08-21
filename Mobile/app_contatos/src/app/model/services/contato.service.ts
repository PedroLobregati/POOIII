import { Injectable } from '@angular/core';
import Contato from '../Contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  public lista_contatos : Contato[] = [];

  constructor() { 
    let c1 : Contato = new Contato("Carlos Eduardo", 91094415, "ceia@gmail.com");
    let c2 : Contato = new Contato("Jotair", 99827195, "jotair@gmail.com");
    let c3 : Contato = new Contato("Giovane Galvão", 99284415, "gio@gmail.com");
    let c4 : Contato = new Contato("Josiel Kulk", 91821098, "josiel@gmail.com");
    this.lista_contatos.push(c1);
    this.lista_contatos.push(c2);
    this.lista_contatos.push(c3);
    this.lista_contatos.push(c4);
  }

  cadastrar(contato: Contato){
    this.lista_contatos.push(contato);
  }

  obterTodos() : Contato[]{
    return this.lista_contatos;
  }

  obterPorIndice(indice : number) : Contato{
    return this.lista_contatos[indice];
  }
}
