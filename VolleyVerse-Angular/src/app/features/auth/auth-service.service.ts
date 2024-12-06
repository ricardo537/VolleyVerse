import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/app/models/dto/login-dto';
import { RegisterClubDTO } from 'src/app/models/dto/register-club-dto';
import { RegisterUserDTO } from 'src/app/models/dto/register-user-dto';
import { UpdateClubDTO } from 'src/app/models/dto/update-club-dto';
import { UpdateUserDTO } from 'src/app/models/dto/update-user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiRegisterUserURL = "http://127.0.0.1:8080/volleyverse/api/v1/users/register";
  private apiRegisterClubURL = "http://127.0.0.1:8080/volleyverse/api/v1/clubs/register";
  private apiLoginURL = "http://127.0.0.1:8080/volleyverse/api/v1/auth/login";
  private apiDeleteURL = "http://127.0.0.1:8080/volleyverse/api/v1/auth/delete";
  private apiUpdateUserURL = "http://127.0.0.1:8080/volleyverse/api/v1/users/update";
  private apiUpdateClubURL = "http://127.0.0.1:8080/volleyverse/api/v1/clubs/update";

  constructor(private http: HttpClient) { }

  //Es posible que el cuerpo que se envía en las peticiones haya que forzar nosotros la estructura
  public registerUser (register: RegisterUserDTO): Observable<boolean> {
    return this.http.post<boolean>(this.apiRegisterUserURL, register);
  }

  public registerClub (register: RegisterClubDTO): Observable<boolean> {
    return this.http.post<boolean>(this.apiRegisterClubURL, register);
  }

  public login (login: LoginDTO): Observable<LoginDTO> {
    return this.http.post<LoginDTO>(this.apiLoginURL, login);
  }

  public delete (login: LoginDTO): Observable<boolean> {
    return this.http.post<boolean>(this.apiDeleteURL, login);
  }

  public updateUser (update: UpdateUserDTO): Observable<LoginDTO> {
    return this.http.post<LoginDTO>(this.apiUpdateUserURL, update);
  }

  public updateClub (update: UpdateClubDTO): Observable<LoginDTO> {
    return this.http.post<LoginDTO>(this.apiUpdateClubURL, update);
  }
}
