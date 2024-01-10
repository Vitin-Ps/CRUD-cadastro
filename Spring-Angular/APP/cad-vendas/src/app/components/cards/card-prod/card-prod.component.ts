import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-prod',
  templateUrl: './card-prod.component.html',
  styleUrl: './card-prod.component.css',
})
export class CardProdComponent {
  @Input() nome!: string;
  @Input() valor!: number;
  @Output() valorSelecionado = new EventEmitter<boolean>();
  selecionado: boolean = false;

  faMoneyBill = faMoneyBill;

  constructor(private elementRef: ElementRef) {}

  selecionarProduto(classe: string) {
    this.selecionado = !this.selecionado;
    if (this.selecionado)
      this.elementRef.nativeElement
        .querySelector('.card-produto')
        .classList.add(classe);
    else
      this.elementRef.nativeElement
        .querySelector('.card-produto')
        .classList.remove(classe);
    this.valorSelecionado.emit(this.selecionado);
  }
  
  adicionarClasseNaDivInterna(classe: string) {
    this.elementRef.nativeElement
      .querySelector('.card-produto')
      .classList.add(classe);
  }

  removerClasseNaDivInterna(classe: string) {
    this.elementRef.nativeElement
      .querySelector('.card-produto')
      .classList.remove(classe);
  }
}
