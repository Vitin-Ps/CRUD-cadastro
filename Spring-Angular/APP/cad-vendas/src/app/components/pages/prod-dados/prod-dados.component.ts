import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Produto } from '../../../interfaces/Produto';
import { ProdutoService } from '../../../services/produto.service';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FuncionalidadesExtrasService } from '../../../services/funcionalidades-extras.service';
import { MensagensService } from '../../../services/mensagens.service';
import { formatCurrency } from '@angular/common';
import { ComunicacaoService } from '../../../services/comunicacao.service';

@Component({
  selector: 'app-prod-dados',
  templateUrl: './prod-dados.component.html',
  styleUrl: './prod-dados.component.css',
})
export class ProdDadosComponent implements OnInit {
  allProdutos: Produto[] = [];
  produtos: Produto[] = [];
  shaded: boolean = false;
  produto!: Produto;
  @ViewChild('cardsContainer') cardsContainer!: ElementRef;

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  constructor(
    private produtoService: ProdutoService,
    // private funcionalidades: FuncionalidadesExtrasService,
    private mensagemService: MensagensService,
    private comunicacaoService: ComunicacaoService
  ) {}

  ngOnInit(): void {
    this.produtoService.listarProdutosPage(0, 10, 'nome').subscribe((item) => {
      this.allProdutos = item.content;
      this.produtos = item.content;
    });

    setTimeout(() => {
      this.verificarAltura();
    }, 10);

    this.comunicacaoService.emitFunction.subscribe(() => {
      console.log('chegou no emit2');
      if (this.produto != null) this.removerProduto();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.verificarAltura();
  }

  verificarAltura() {
    const cardsContainer = this.cardsContainer.nativeElement;
    if (cardsContainer.offsetHeight > 500) this.shaded = true;
    else this.shaded = false;
  }

  selecionarCard(produtoSelecionado: Produto) {
    this.produtos.forEach((produto) => {
      if (produto.id === produtoSelecionado.id) {
        produto.selecionado = !produto.selecionado;
        console.log(
          `Produto: ${produtoSelecionado.nome}, Estado: ${produto.selecionado}`
        );
      } else {
        produto.selecionado = false;
      }
      this.produto = produtoSelecionado;
    });
  }

  pesquisar(e: Event) {
    const target = e.target as HTMLInputElement;
    const valor = FuncionalidadesExtrasService.removerAcentuacoes(target.value);
    console.log(valor);
    this.produtos = this.allProdutos.filter((produto) => {
      const nome = FuncionalidadesExtrasService.removerAcentuacoes(produto.nome);
      return nome.includes(valor);
    });
    setTimeout(() => {
      this.verificarAltura();
    }, 50);
  }

  chamarComfirm(produto: Produto) {
    console.log('cheguei');
    this.mensagemService.confirm(
      `Tem certeza que quer excluir \n ${produto.nome} - ${FuncionalidadesExtrasService.moedaReal(produto.valor)}`
    );
  }

  removerProduto() {
    this.produtoService.excluirProdutoLogico(this.produto.id!).subscribe(() => {
      window.location.reload();
    });
  }
}
