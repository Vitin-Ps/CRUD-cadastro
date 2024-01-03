import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {
  mensagem: string = '';
  constructor() { }
  add(mensagem: string) {
    this.mensagem = mensagem;

    setTimeout(() => {
      this.clear();
    }, 4000);
  }

  clear() {
    this.mensagem = ''
  }
}
