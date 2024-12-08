import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterPlayerDTO } from 'src/app/models/dto/register-player-dto';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiRegisterPlayerURL = "http://127.0.0.1:8080/volleyverse/api/v1/players/register";

  constructor(private http: HttpClient) { }

  //Es posible que el cuerpo que se envía en las peticiones haya que forzar nosotros la estructura
  public registerPlayer (register: RegisterPlayerDTO): Observable<boolean> {
    const body = {
      "email": register.email,
      "password": register.password,
      "name": register.name,
      "last_name": register.last_name
    }
    return this.http.post<boolean>(this.apiRegisterPlayerURL, body);
  }

}
