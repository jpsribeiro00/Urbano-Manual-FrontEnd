import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private API = environment.API

  constructor(private http: HttpClient) { }

  public get_all(): Observable<Array<Pessoa>> {
    return this.http.get<Array<Pessoa>>(`${this.API}pessoa`)
  }

  public get(id: number): Observable<Pessoa>{
    return this.http.get<Pessoa>(`${this.API}pessoa/${id}`)
  }

  public post(pessoa: Pessoa): Observable<void>{
    return this.http.post<void>(`${this.API}pessoa`, pessoa)
  }

  public put(pessoa: Pessoa): Observable<void>{
    return this.http.put<void>(`${this.API}pessoa`, pessoa)
  }

  public delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}pessoa/${id}`)
  }

}
