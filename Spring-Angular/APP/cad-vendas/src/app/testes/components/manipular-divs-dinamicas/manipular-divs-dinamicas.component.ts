import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Produto } from '../../../interfaces/Produto';

@Component({
  selector: 'app-manipular-divs-dinamicas',
  templateUrl: './manipular-divs-dinamicas.component.html',
  styleUrl: './manipular-divs-dinamicas.component.css',
})
export class ManipularDivsDinamicasComponent implements AfterViewInit, OnInit {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'camisa',
      valor: 100,
    },
    {
      id: 2,
      nome: 'sapato',
      valor: 25,
    },
  ];

  @ViewChildren('cardsContainer') cardsContainers!: QueryList<ElementRef>;

  ngOnInit(): void {
    console.log('oi');
  }

  //ciclo de vida angular, depois de carrgear os elementos html
  ngAfterViewInit(): void {
    // Certifique-se de que a QueryList está populada
    if (this.cardsContainers && this.cardsContainers.length > 0) {
      // Itera sobre todas as instâncias
      this.cardsContainers.forEach((container, index) => {
        const alturaDaDiv = container.nativeElement.offsetHeight;
        console.log(`Altura da div ${index + 1}: ${alturaDaDiv}px`);
      });
    }
  }

  selecionarCard(id:number, estadoProduto: boolean) {

    console.log(`Produto: ${id}, Estado: ${estadoProduto}`);

    if (this.cardsContainers && this.cardsContainers.length > 0) {
      // Itera sobre todas as instâncias
      this.cardsContainers.forEach((container, index) => {
        if (this.produtos && index < this.produtos.length) {
          const produtoId = this.produtos[index].id;
          if (produtoId === id) {
            container.nativeElement.que
          } else {
            container.nativeElement.classList.remove('selecionado');
          }
        }
      });
      
    }
  }
}
