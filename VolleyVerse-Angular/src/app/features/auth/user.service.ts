import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUserDTO } from 'src/app/models/dto/register-user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiRegisterUserURL = "http://127.0.0.1:8080/volleyverse/api/v1/users/register";

  constructor(private http: HttpClient) { }

  //Es posible que el cuerpo que se envía en las peticiones haya que forzar nosotros la estructura
  public registerUser (register: RegisterUserDTO): Observable<boolean> {
    const body = {
      "email": register.email,
      "password": register.password,
      "name": register.name,
      "last_name": register.last_name
    }
    const headers = { 'Content-Type': 'application/json' };
    console.log(body);
    return this.http.post<boolean>(this.apiRegisterUserURL, body, {headers});
  }

}
