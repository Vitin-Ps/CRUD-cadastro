import { Component, Input } from '@angular/core';
import { faEdit, faMoneyBill, faShoppingBag, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-venda',
  templateUrl: './card-venda.component.html',
  styleUrl: './card-venda.component.css',
})
export class CardVendaComponent {
  @Input() id: string = '';
  @Input() nome: string = '';
  @Input() valorTotal: string = '';
  @Input() comissao: string = '';

  faUser = faUser;
  faShoppingBag = faShoppingBag;
  faMoneyBill = faMoneyBill;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
}
