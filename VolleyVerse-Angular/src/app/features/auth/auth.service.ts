import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/app/models/dto/login-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiLoginURL = "http://127.0.0.1:8080/volleyverse/api/v1/auth/login";
  private apiDeleteURL = "http://127.0.0.1:8080/volleyverse/api/v1/auth/delete";

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
    return this.http.post<boolean>(this.apiDeleteURL, login);
  }

  /* Estos métodos hay que incluirlos en un servicio específicos
  public updateUser (update: UpdateUserDTO): Observable<LoginDTO> {
    return this.http.post<LoginDTO>(this.apiUpdateUserURL, update);
  }

  public updateClub (update: UpdateClubDTO): Observable<LoginDTO> {
    return this.http.post<LoginDTO>(this.apiUpdateClubURL, update);
  }*/
}
