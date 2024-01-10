import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Produto } from '../../../interfaces/Produto';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-prod-dados',
  templateUrl: './prod-dados.component.html',
  styleUrl: './prod-dados.component.css',
})
export class ProdDadosComponent implements OnInit {
  produtosTotal: Produto[] = [];
  produtos: Produto[] = [];
  @ViewChild('cardsContainer') cardsContainer!: ElementRef;
  @ViewChildren('cardsContainer') cardsDiv!: QueryList<ElementRef>;

  constructor(
    private produtoService: ProdutoService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.produtoService.listarProdutosPage(0, 10, 'nome').subscribe((item) => {
      this.produtosTotal = item.content;
      this.produtos = item.content;
    });

    setTimeout(() => {
      this.verificarAltura();
    },10);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.verificarAltura();
  }

  verificarAltura() {
    const cardsContainer = this.cardsContainer.nativeElement;
    if (cardsContainer.offsetHeight > 500)
      this.renderer.addClass(cardsContainer, 'shaded');
    else
    this.renderer.removeClass(cardsContainer, 'shaded');
  }

  selecionarCard(id:number, estadoProduto: boolean) {

    console.log(`Produto: ${id}, Estado: ${estadoProduto}`);

    if (this.cardsDiv && this.cardsDiv.length > 0) {
      // Itera sobre todas as instâncias
      this.cardsDiv.forEach((container, index) => {
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
