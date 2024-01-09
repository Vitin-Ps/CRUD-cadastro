import { Component, OnInit } from '@angular/core';
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

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.listarProdutosPage(0, 10, "nome").subscribe((item) => {
      this.produtosTotal = item.content
      this.produtos = item.content
    });
  }

  
}
