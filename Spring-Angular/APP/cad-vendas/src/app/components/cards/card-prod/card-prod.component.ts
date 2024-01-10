import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-prod',
  templateUrl: './card-prod.component.html',
  styleUrl: './card-prod.component.css',
})
export class CardProdComponent implements OnInit{
  @Input() nome!: string;
  @Input() valor!: number;
  @Input() selecionado: boolean = false;

  faMoneyBill = faMoneyBill;

  constructor(private elementRef: ElementRef) {}
  
  ngOnInit(): void {
  //   if (this.selecionado)
  //   this.elementRef.nativeElement
  //     .querySelector('.card-produto')
  //     .classList.add('selecionado');
  // else
  //   this.elementRef.nativeElement
  //     .querySelector('.card-produto')
  //     .classList.remove('selecionado');
  // this.valorSelecionado.emit(this.selecionado);
  }
  
}
