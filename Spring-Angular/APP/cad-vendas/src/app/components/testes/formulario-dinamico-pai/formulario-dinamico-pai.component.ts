import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-dinamico-pai',
  templateUrl: './formulario-dinamico-pai.component.html',
  styleUrl: './formulario-dinamico-pai.component.css'
})
export class FormularioDinamicoPaiComponent {
  formularios = [
    {label: "Nome: ", placeholder: "digite seu nome", tipo: "text", valor: "name", required: true},
    {label: "E-mail: ", placeholder: "digite seu email", tipo: "text", value: "email", required: true},    
  ] 

  btnEnviar = "Enviar"
}
