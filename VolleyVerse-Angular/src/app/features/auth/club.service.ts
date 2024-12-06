import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterClubDTO } from 'src/app/models/dto/register-club-dto';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private apiRegisterClubURL = "http://127.0.0.1:8080/volleyverse/api/v1/clubs/register";
  
  constructor(private http: HttpClient) { }

  //Es posible que el cuerpo que se envía en las peticiones haya que forzar nosotros la estructura
  public registerClub (register: RegisterClubDTO): Observable<boolean> {
    const body = {
      "email": register.email,
      "password": register.password,
      "name": register.name,
      "zip_code": register.zip_code,
      "contact": register.contact
    }
    return this.http.post<boolean>(this.apiRegisterClubURL, body);
  }

}
