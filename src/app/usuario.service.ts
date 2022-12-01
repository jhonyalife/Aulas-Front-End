import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?per_page=12')
  }
}
