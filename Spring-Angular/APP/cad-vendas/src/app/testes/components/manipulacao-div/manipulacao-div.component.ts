import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manipulacao-div',
  templateUrl: './manipulacao-div.component.html',
  styleUrl: './manipulacao-div.component.css',
})
export class ManipulacaoDivComponent {
  @ViewChild('minhaDiv') minhaDiv!: ElementRef;

  adicionarClasseEObterAltura() {
    // Adiciona uma classe à div
    this.minhaDiv.nativeElement.classList.add('minha-classe-adicional');

    // Obtém a altura da div
    const altura = this.minhaDiv.nativeElement.offsetHeight;
    console.log('Altura da div:', altura);
  }
}
