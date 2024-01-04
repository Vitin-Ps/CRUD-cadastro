import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VendaDTO } from '../../../interfaces/VendaDTO';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from '../../../services/funcionario.service';
import { Funcionario } from '../../../interfaces/Funcionario';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from '../../../services/carrinho.service';
import { Carrinho } from '../../../interfaces/Carrinho';
import { MensagensService } from '../../../services/mensagens.service';

@Component({
  selector: 'app-form-venda',
  templateUrl: './form-venda.component.html',
  styleUrl: './form-venda.component.css',
})
export class FormVendaComponent {
  @Output() onSubmit = new EventEmitter<VendaDTO>();
  @Input() btnText!: string;
  valorVenda: string = '';
  vendasForm!: FormGroup;
  funcionarioSelecionado: number | null = null;
  funcionarios: Funcionario[] = [];
  funcionario?: Funcionario;
  itemsCarrinho: Carrinho[] = [];

  constructor(
    private funcService: FuncionarioService,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute,
    private mensagemService: MensagensService
  ) {}

  ngOnInit(): void {
    //recuperando id da url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //buscando funcionarios para select
    this.funcService.listarFuncionariosAll().subscribe((response) => {
      const data = response.content;
      this.funcionarios = data;
    });
    //buscando funcionario baseado no array de funcionarios baseado no id
    this.funcionario = this.funcionarios.find(
      (funcionario) => funcionario.id == id
    );
    //atribuindo id do funcionario ao funcionarioselecionado caso o funcionario nao seja nulo
    if (this.funcionario != null) {
      this.funcionarioSelecionado = Number(this.funcionario.id);
      //obs: não colocar pesquisas do banco dentro de ifs porque o js é sincrono
    }
    // validando formulario
    this.validaForm();
    //buscando itens do carrinho baseado no id do funcionario
    this.listarItemsCarrinho(id);
  }

  get idFuncionario() {
    return this.vendasForm.get('idFuncionario')!;
  }
  get valor() {
    return this.vendasForm.get('valor')!;
  }
  submit() {
    if (this.vendasForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.vendasForm.value);
  }

  listarItemsCarrinho(id: number) {
    this.carrinhoService
      .listarItemsAllPorIdFuncionario(id)
      .subscribe((item) => {
        const data = item.content;
        this.itemsCarrinho = data;
        const length = this.itemsCarrinho.length;
        this.valorVenda = '';

        if (this.itemsCarrinho != undefined) {
          if (length != 0) {
            let valor = 0;
            this.itemsCarrinho.forEach((item) => {
              return (valor += item.produto.valor);
            });
            this.valorVenda = String(valor);
            this.valor.setValue(this.valorVenda);
          } else {
            this.valorVenda = '';
          }
        } else {
          this.valorVenda = '';
        }
      });
  }

  validaForm(): void {
    //validando formulario
    this.vendasForm = new FormGroup({
      id: new FormControl(''),
      idFuncionario: new FormControl(
        this.funcionario != null ? this.funcionario.id : '',
        [Validators.required]
      ),
      valor: new FormControl(this.valorVenda != '' ? this.valorVenda : '', [
        Validators.required,
      ]),
    });
  }

  selecionarFuncionario(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.funcionarioSelecionado = Number(value);
    this.listarItemsCarrinho(this.funcionarioSelecionado);
  }

  limparCarrinho(e: Event): void {
    e.preventDefault();
    if(this.valorVenda == "") {
      this.mensagemService.add("Carrinho já está vazio!");
      return;
    }
    if (this.funcionarioSelecionado != null) {
      this.carrinhoService
        .limparCarrinho(this.funcionarioSelecionado)
        .subscribe(() => {
          window.location.reload()
        });
    }
  }
}
