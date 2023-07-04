import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

export interface IPosts {
  body: string;
  id: number;
  title: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(private http: HttpClient) { }

  getData(action: string, param?: Params): Observable<IPosts[]> {
    return this.http.get<IPosts[]>('http://localhost:3000/' + action,{params : param})
  }
}
