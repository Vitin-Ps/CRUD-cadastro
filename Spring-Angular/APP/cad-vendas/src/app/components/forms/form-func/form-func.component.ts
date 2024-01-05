import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Funcionario } from '../../../interfaces/Funcionario';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-func',
  templateUrl: './form-func.component.html',
  styleUrl: './form-func.component.css'
})
export class FormFuncComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnText!: string;
  @Input() funcData: Funcionario | null = null; // para atualização

  funcForm!: FormGroup;

  ngOnInit(): void{
    this.funcForm = new FormGroup({
      id: new FormControl(this.funcData ? this.funcData.id : ''),
      nome: new FormControl(this.funcData ? this.funcData.nome : '', [Validators.required]),
      email: new FormControl(this.funcData ? this.funcData.email : '', [Validators.required]),
      porcentagem: new FormControl(this.funcData ? this.funcData.porcentagem : '', [Validators.required])
    });
  }

  get nome() {
    return this.funcForm.get('nome')
  }
  
  get email() {
    return this.funcForm.get('email')
  }
  
  get porcentagem() {
    return this.funcForm.get('porcentagem')
  }

  submit() {
    if(this.funcForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.funcForm.value);
  }
}
