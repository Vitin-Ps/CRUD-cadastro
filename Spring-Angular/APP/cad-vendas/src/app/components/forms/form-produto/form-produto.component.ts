import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../../interfaces/Produto';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrl: './form-produto.component.css'
})
export class FormProdutoComponent {
  @Output() onSubmit = new EventEmitter<Produto>();
  @Input() btnText!: string;
  @Input() prodData: Produto | null = null;

  prodForm!: FormGroup;

  ngOnInit(): void {
    this.prodForm = new FormGroup({
      id: new FormControl(this.prodData ? this.prodData.id : ''),
      nome: new FormControl(this.prodData ? this.prodData.nome : '', [Validators.required]),
      valor: new FormControl(this.prodData ? this.prodData.valor : '', [Validators.required]),
    })
  }

  get nome() {
    return this.prodForm.get('nome')!;
  }
  get valor() {
    return this.prodForm.get('valor')!;
  }

  submit() {
    if(this.prodForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.prodForm.value);
  }
}
