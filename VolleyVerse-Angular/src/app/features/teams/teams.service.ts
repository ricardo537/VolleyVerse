import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamCreationDTO } from 'src/app/models/dto/team-creation-dto';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiCreateTeamURL = "http://127.0.0.1:8080/volleyverse/api/v1/teams/create";

  constructor(private http: HttpClient) { }

  public createTeam (team: TeamCreationDTO): Observable<string> {
    const body = {
        "name": team.name,
        "category": team.category,
        "type": team.type,
        "club_id": team.clubId,
        "login": {
            "email": team.login.email,
            "password": team.login.password,
            "type": team.login.type
         }
    };
    return this.http.post(this.apiCreateTeamURL, body, { responseType: 'text' });
  }

}
