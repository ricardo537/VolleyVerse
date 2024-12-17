import { Component, OnInit } from '@angular/core';
import { AddTeamComponent } from './add-team/add-team.component';
import { TeamService } from './teams.service';
import { HttpClientModule } from '@angular/common/http';
import { TeamDTO } from 'src/app/models/dto/team-dto';
import { LoginDTO } from 'src/app/models/dto/login-dto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  imports: [ AddTeamComponent, HttpClientModule, CommonModule ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
  providers: [ TeamService ]
})
export class TeamsComponent implements OnInit {
  public addForm: boolean = false;
  public requestsForm: boolean = false;
  public teams: TeamDTO[] = [];

  constructor (private teamService: TeamService, private router: Router) { }

  ngOnInit(): void {
    this.teamService.getTeams(LoginDTO.getSession()).subscribe({
      next: (response: TeamDTO[]) => {
        this.teams = response;
      }
    });
  }

  public show (form: string): void {
    if (form === "add") {
      this.addForm = true;
    } else {
      if (form === "requests") {
        this.requestsForm = true;
      }
    }
  }

  public hide (form: string): void {
    if (form === "add") {
      this.addForm = false;
    } else {
      if (form === "requests") {
        this.requestsForm = false;
      }
    }
  }

  public leaveTeam(teamId: string): void {
    this.teamService.leaveTeam(teamId).subscribe({
      next: (response) => {
        this.router.navigate(["/volleyverse/dashboard"]);
      }
    });
  }

}
