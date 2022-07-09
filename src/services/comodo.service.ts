import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comodo } from 'src/models/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComodoService {

  private API = environment.API

  constructor(private http: HttpClient) { }

  public get_all(): Observable<Array<Comodo>> {
    return this.http.get<Array<Comodo>>(`${this.API}Comodo/Comodo`)
  }

  public get(id: number): Observable<Comodo>{
    return this.http.get<Comodo>(`${this.API}Comodo/Comodo/${id}`)
  }

  public post(comodo: Comodo): Observable<void>{
    return this.http.post<void>(`${this.API}Comodo/Comodo`, comodo)
  }

  public put(comodo: Comodo): Observable<void>{
    return this.http.put<void>(`${this.API}Comodo/Comodo`, comodo)
  }

  public delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}Comodo/Comodo/${id}`)
  }
  
}
