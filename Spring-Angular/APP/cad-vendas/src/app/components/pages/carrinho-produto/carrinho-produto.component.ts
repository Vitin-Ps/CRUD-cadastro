import { Component } from '@angular/core';
import { Produto } from '../../../interfaces/Produto';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProdutoService } from '../../../services/produto.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carrinho-produto',
  templateUrl: './carrinho-produto.component.html',
  styleUrl: './carrinho-produto.component.css'
})
export class CarrinhoProdutoComponent {
  allProdutos: Produto[] = [];
  produtos: Produto[] = [];

  somaProdForm!: FormGroup;

  faSearch = faSearch
  pesquisaText: string = '';

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void{
    this.produtoService.listarProdutosAll().subscribe((response) => {
      const data = response.content;
      this.allProdutos = data;
      this.produtos = data;
    })
  }

  procurar(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.produtos = this.allProdutos.filter((produto) => {
      return produto.nome.toLowerCase().includes(value);
    })
  }
}
