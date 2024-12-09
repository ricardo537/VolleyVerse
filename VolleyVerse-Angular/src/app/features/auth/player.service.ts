import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterPlayerDTO } from 'src/app/models/dto/register-player-dto';
import { UpdatePlayerDTO } from 'src/app/models/dto/update-player-dto';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiRegisterPlayerURL = "http://127.0.0.1:8080/volleyverse/api/v1/players/register";
  private apiUpdatePlayerURL = "http://127.0.0.1:8080/volleyverse/api/v1/players/update";

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

  public updatePlayer (update: UpdatePlayerDTO): Observable<any> {
    const body = {
      "email": update.email, 
      "password": update.password,
      "name": update.name,
      "last_name": update.last_name,
      "description": update.description,
      "login": {
        "email": update.login.email,
        "password": update.login.password,
        "type": update.login.type
      }
    };

    return this.http.post(this.apiUpdatePlayerURL, body);
  }

}
