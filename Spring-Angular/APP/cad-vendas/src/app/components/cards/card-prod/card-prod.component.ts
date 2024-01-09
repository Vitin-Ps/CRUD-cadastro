import { Component, Input } from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-prod',
  templateUrl: './card-prod.component.html',
  styleUrl: './card-prod.component.css'
})
export class CardProdComponent {
  @Input() selecionado!: string;
  @Input() nome!: string;
  @Input() valor!: number;
  
  faMoneyBill = faMoneyBill
}
