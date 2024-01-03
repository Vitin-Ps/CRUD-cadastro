import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface CampoConfiguracao {
  label?: string;
  placeholder?: string;
  tipo?: string;
  value?: string;
  requiered?: boolean;
}

@Component({
  selector: 'app-formulario-dinamico-filho',
  templateUrl: './formulario-dinamico-filho.component.html',
  styleUrls: ['./formulario-dinamico-filho.component.css'],
})
export class FormularioDinamicoFilhoComponent implements OnInit {
  @Input() configuracoes?: CampoConfiguracao[];
  @Input() btnEnviar?: string;

  formDinamico!: FormGroup;
  formularioData: CampoConfiguracao[] = [];

  constructor(private formsBuilder: FormBuilder) {}

  ngOnInit() {
    this.inicializarFormulario();
    this.formularioData = this.configuracoes || [];
  }

  inicializarFormulario() {
    const controls: { [key: string]: any } = {};
    if (this.configuracoes) {
      this.configuracoes.forEach((campo) => {
        controls[campo.label!] = [null, Validators.required];
      });
    }

    this.formDinamico = this.formsBuilder.group(controls);
  }

  enviarFormulario() {
    if (this.formDinamico.valid) {
      // Lógica para lidar com os dados do formulário
      console.log('Formulário submetido com sucesso:', this.formDinamico.value);
    } else {
      // Trate os campos inválidos ou não preenchidos conforme necessário
      console.log('Formulário inválido. Preencha todos os campos obrigatórios.');
    }
  }
}
