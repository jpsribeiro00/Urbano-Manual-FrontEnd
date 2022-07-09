import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movel } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class MovelService {

  private API = environment.API

  constructor(private http: HttpClient) { }

  public get_all(): Observable<Array<Movel>> {
    return this.http.get<Array<Movel>>(`${this.API}Movel`)
  }

  public get(id: number): Observable<Movel>{
    return this.http.get<Movel>(`${this.API}Movel/${id}`)
  }

  public post(movel: Movel): Observable<void>{
    return this.http.post<void>(`${this.API}Movel`, movel)
  }

  public put(movel: Movel): Observable<void>{
    return this.http.put<void>(`${this.API}Movel`, movel)
  }

  public delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}Movel/${id}`)
  }

}
