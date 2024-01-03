import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../interfaces/Funcionario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}funcionarios`;

  constructor(private http: HttpClient) { }

  registraFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    console.log(this.apiUrl)
    return this.http.post<Funcionario>(this.apiUrl, funcionario);
  }
}
