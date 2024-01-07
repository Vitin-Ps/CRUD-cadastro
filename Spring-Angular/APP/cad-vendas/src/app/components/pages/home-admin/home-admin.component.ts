import { Component } from '@angular/core';
import { faAddressBook, faHandsHelping, faTShirt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {
  faAddressBook = faAddressBook
  faHandsHelping = faHandsHelping
  faTShirt = faTShirt
  btnText = "Ver"
}
