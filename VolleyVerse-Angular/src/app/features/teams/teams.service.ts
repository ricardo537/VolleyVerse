import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/app/models/dto/login-dto';
import { TeamCreationDTO } from 'src/app/models/dto/team-creation-dto';
import { TeamDTO } from 'src/app/models/dto/team-dto';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiCreateTeamURL = "http://127.0.0.1:8080/volleyverse/api/v1/teams/create";
  private apiGetTeamsURL = "http://127.0.0.1:8080/volleyverse/api/v1/teams/getTeams";
  private apiLeaveTeamURL = "http://127.0.0.1:8080/volleyverse/api/v1/teams/leave";

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

  public getTeams(login: LoginDTO): Observable<TeamDTO[]> {
    const body = {
      "email": login.email,
      "password": login.password,
      "type": login.type
    };
    return this.http.post<TeamDTO[]>(this.apiGetTeamsURL, body);
  }

  public leaveTeam(teamId: string): Observable<boolean> {
    const login = LoginDTO.getSession();
    const body = {
      "teamId": teamId,
      "login": {
        "email": login.email,
        "password": login.password,
        "type": login.type
      }
    }
    return this.http.post<boolean>(this.apiLeaveTeamURL, body);
  }

}
