import { Component, OnInit } from '@angular/core';
import { Venda } from '../../../interfaces/Venda';

@Component({
  selector: 'app-vendas-dados',
  templateUrl: './vendas-dados.component.html',
  styleUrl: './vendas-dados.component.css',
})
export class VendasDadosComponent implements OnInit {
  vendas: Venda[] = [
    {
      id: 1,
      funcionario: {
        id: 1,
        nome: 'Victor Soares',
        email: 'victor@email.com',
        porcentagem: 12,
      },
      valor: 450.35,
      comissao: 45.03,
    },
    {
      id: 2,
      funcionario: {
        id: 1,
        nome: 'Victor Soares',
        email: 'victor@email.com',
        porcentagem: 12,
      },
      valor: 587.99,
      comissao: 58.79,
    },
    {
      id: 3,
      funcionario: {
        id: 2,
        nome: 'João',
        email: 'joao@email.com',
        porcentagem: 6,
      },
      valor: 450.35,
      comissao: 45.03,
    },
    {
      id: 3,
      funcionario: {
        id: 2,
        nome: 'João',
        email: 'joao@email.com',
        porcentagem: 6,
      },
      valor: 450.35,
      comissao: 45.03,
    },
    {
      id: 3,
      funcionario: {
        id: 2,
        nome: 'João',
        email: 'joao@email.com',
        porcentagem: 6,
      },
      valor: 450.35,
      comissao: 45.03,
    },
    {
      id: 3,
      funcionario: {
        id: 2,
        nome: 'João',
        email: 'joao@email.com',
        porcentagem: 6,
      },
      valor: 450.35,
      comissao: 45.03,
    },
    {
      id: 3,
      funcionario: {
        id: 2,
        nome: 'João',
        email: 'joao@email.com',
        porcentagem: 6,
      },
      valor: 450.35,
      comissao: 45.03,
    },
    {
      id: 3,
      funcionario: {
        id: 2,
        nome: 'João',
        email: 'joao@email.com',
        porcentagem: 6,
      },
      valor: 450.35,
      comissao: 45.03,
    },
    {
      id: 3,
      funcionario: {
        id: 2,
        nome: 'João',
        email: 'joao@email.com',
        porcentagem: 6,
      },
      valor: 45000.35,
      comissao: 45.03,
    },
  ];
  totalVendas: Venda[] = [];
  idFuncSelecionario: number = 0;
  totalVendasDoFuncionario: {
    vendas: number;
    valorTotal: number;
    comissao: number;
  } | null = null;

  ngOnInit(): void {
    this.agruparVendasPorFuncionario();
  }
  agruparVendasPorFuncionario() {
    /*
    set(key, value): Adiciona um par chave-valor ao Map.
    get(key): Retorna o valor associado à chave ou  undefined se a chave não existir.
    has(key): Verifica se uma chave está presente no Map.
    delete(key): Remove a entrada associada à chave.
    clear(): Remove todas as entradas do Map.
    keys(): Retorna um iterador com as chaves do Map.
    values(): Retorna um iterador com os valores do Map.
    entries(): Retorna um iterador com os pares chave-valor do Map.
    */
    const mapaVendas: Map<string, Venda> = new Map();

    this.vendas.forEach((venda) => {
      const key = venda.funcionario.nome;

      if (mapaVendas.has(key)) {
        const vendaExistente = mapaVendas.get(key);

        // Mesclar valores para o funcionário existente
        vendaExistente!.valor += venda.valor;
        vendaExistente!.comissao! += venda.comissao!;
      } else {
        // Adicionar nova entrada no mapa
        // os ... são usados para criar uma cópia do objeto antes de manda-lo para o Map
        mapaVendas.set(key, { ...venda });
      }
    });

    // Converter o mapa de volta para um array
    this.totalVendas = Array.from(mapaVendas.values());
  }

  selecionarFuncionario(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.idFuncSelecionario = Number(value);

    const vendasPorFuncionario: Venda[] = this.vendas.filter(
      (venda) => venda.funcionario.id === this.idFuncSelecionario
    );

    let vendas: number = 0;
    let comissao: number = 0;
    let valorTotal: number = 0;

    vendasPorFuncionario.forEach((venda) => {
      vendas++;
      comissao += venda.comissao!;
      valorTotal += venda.valor;
    });

    this.totalVendasDoFuncionario = {
      vendas: vendas,
      valorTotal: valorTotal,
      comissao: comissao,
    };
  }
}
