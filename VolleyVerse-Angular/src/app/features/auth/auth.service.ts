import { HttpClient } from '@angular/common/http';
import { Injectable, Resource } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/app/models/dto/login-dto';
import { PlayerDTO } from 'src/app/models/dto/player-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiLoginURL = "http://127.0.0.1:8080/volleyverse/api/v1/auth/login";
  private apiDeleteURL = "http://127.0.0.1:8080/volleyverse/api/v1/auth/delete";
  private apiGetProfileURL = "http://127.0.0.1:8080/volleyverse/api/v1/auth/getProfile";
  private apiGetProfileImgURL = "http://127.0.0.1:8080/volleyverse/api/v1/media/";

  constructor(private http: HttpClient) { }

  public login (login: LoginDTO): Observable<LoginDTO> {
    const body = {
      "email": login.email,
      "password": login.password,
      "type": login.type
    }
    return this.http.post<LoginDTO>(this.apiLoginURL, body);
  }

  public delete (login: LoginDTO): Observable<boolean> {
    const body = {
      "email": login.email,
      "password": login.password,
      "type": login.type
    }
    return this.http.post<boolean>(this.apiDeleteURL, body);
  }

  public getProfile (login: LoginDTO): Observable<PlayerDTO> {
    const body = {
      "email": login.email,
      "password": login.password,
      "type": login.type
    }
    return this.http.post<PlayerDTO>(this.apiGetProfileURL, body);
  }
}
