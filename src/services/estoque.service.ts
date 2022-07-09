import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estoque } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private API = environment.API

  constructor(private http: HttpClient) { }

  public get_all(): Observable<Array<Estoque>> {
    return this.http.get<Array<Estoque>>(`${this.API}Estoque`)
  }

  public get(id: number): Observable<Estoque>{
    return this.http.get<Estoque>(`${this.API}Estoque/${id}`)
  }

  public post(estoque: Estoque): Observable<void>{
    return this.http.post<void>(`${this.API}Estoque`, estoque)
  }

  public put(estoque: Estoque): Observable<void>{
    return this.http.put<void>(`${this.API}Estoque`, estoque)
  }

  public delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}Estoque/${id}`)
  }

}
