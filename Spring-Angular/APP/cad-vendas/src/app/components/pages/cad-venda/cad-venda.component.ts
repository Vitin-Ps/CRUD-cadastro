import { Component } from '@angular/core';
import { FuncionarioService } from '../../../services/funcionario.service';
import { Funcionario } from '../../../interfaces/Funcionario';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from '../../../services/carrinho.service';
import { Carrinho } from '../../../interfaces/Carrinho';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VendaService } from '../../../services/venda.service';
import { VendaDTO } from '../../../interfaces/VendaDTO';
import { MensagensService } from '../../../services/mensagens.service';

@Component({
  selector: 'app-cad-venda',
  templateUrl: './cad-venda.component.html',
  styleUrl: './cad-venda.component.css',
})
export class CadVendaComponent {
  btnText: string = 'Registrar'

  registrarVenda(venda : VendaDTO) {
    
      console.log(venda)
    //   // this.vendaService.registrarVenda(venda).subscribe(
    //   //   (response) => {
    //   //     console.log('Resposta do servidor:', response);
    //   //     this.mensagemService.add(`Venda cadastrada com Sucesso!`);
    //   //     // this.router.navigate(['/']);
    //   //   },
    //   //   (error) => {
    //   //     console.error('Erro na requisição:', error);
    //   //     if (error.status === 0) {
    //   //       this.mensagemService.add("Erro: Não foi possível conectar à API. Verifique se a API está ligada.");
    //   //     } else {
    //   //       this.mensagemService.add("Erro desconhecido ao cadastrar funcionário.");
    //   //     }
    //   //   }
    //   // );
  }
}


