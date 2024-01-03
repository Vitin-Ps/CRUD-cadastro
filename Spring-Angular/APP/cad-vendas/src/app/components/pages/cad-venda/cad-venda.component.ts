import { Component } from '@angular/core';
import { FuncionarioService } from '../../../services/funcionario.service';
import { Funcionario } from '../../../interfaces/Funcionario';

@Component({
  selector: 'app-cad-venda',
  templateUrl: './cad-venda.component.html',
  styleUrl: './cad-venda.component.css',
})
export class CadVendaComponent {
  valorTeste = 0
  funcionarios: Funcionario[] = [];

  constructor(private funcService: FuncionarioService) {}
  
  ngOnInit(): void {
    this.funcService.listarFuncionariosAll().subscribe((response) => {
      const data = response.content;
      // Não há referência a 'message' na estrutura da resposta
      console.log('Funcionários carregados com sucesso!');
      this.funcionarios = data;
      // Outras informações paginadas estão disponíveis em response.pageable, response.totalPages, response.totalElements, etc.
    });
  }
  
}
