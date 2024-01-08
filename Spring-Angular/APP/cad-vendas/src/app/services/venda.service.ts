import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { VendaDTO } from '../interfaces/VendaDTO';
import { Observable } from 'rxjs';
import { Venda } from '../interfaces/Venda';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root',
})
export class VendaService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}vendas`;

  constructor(private http: HttpClient) {}

  registrarVenda(venda: VendaDTO): Observable<VendaDTO> {
    return this.http.post<VendaDTO>(this.apiUrl, venda);
  }

  listarVendas(): Observable<Response<Venda[]>> {
    return this.http.get<Response<Venda[]>>(this.apiUrl);
  }
}
