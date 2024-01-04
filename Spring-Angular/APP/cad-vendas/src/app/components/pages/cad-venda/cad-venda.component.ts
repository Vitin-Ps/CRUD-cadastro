import { Component } from '@angular/core';
import { VendaDTO } from '../../../interfaces/VendaDTO';

@Component({
  selector: 'app-cad-venda',
  templateUrl: './cad-venda.component.html',
  styleUrl: './cad-venda.component.css',
})
export class CadVendaComponent {
  btnText: string = 'Registrar'

  registrarVenda(venda : VendaDTO) {
    
    console.log("chegou aqui")
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


