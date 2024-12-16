import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchUsersComponent } from 'src/app/shared/components/search-users/search-users.component';
import { TeamService } from '../teams.service';
import { HttpClientModule } from '@angular/common/http';
import { TeamCreationDTO } from 'src/app/models/dto/team-creation-dto';
import { LoginDTO } from 'src/app/models/dto/login-dto';

@Component({
  selector: 'app-add-team',
  imports: [ SearchUsersComponent, ReactiveFormsModule, HttpClientModule ],
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.css',
  providers: [ TeamService ]
})
export class AddTeamComponent {

  public searchUserVisibility: boolean = false;
  public teamForm: FormGroup;
  public message: string = "";
  public teamId: string = "";

  constructor (private formBuilder: FormBuilder, private teamService: TeamService) {
    this.teamForm = this.formBuilder.group({
      name: ['', Validators.required ],
      category: ['', Validators.required ],
      type: ['', Validators.required ]
    });
  }

  public createTeam (): void {
    const teamData: any = this.teamForm.value;
    const team: TeamCreationDTO = new TeamCreationDTO(teamData.name, teamData.category, teamData.type, "", LoginDTO.getSession());
    this.teamService.createTeam(team).subscribe({
      next: (response: string) => {
        this.teamId = response;
        if (this.isValidData()) {
          this.searchUserVisibility = true;
          this.message = "";
        } else {
          this.message = "Tienes que rellenar los datos del equipo antes de poder invitar a gente";
        }
      },
      error: (error) => {
        console.error(error);
        this.message = "Ha surgido un problema a la hora de crear el equipo, revise su conexión";
      }
    })
  }

  public isValidData(): boolean {
    if (this.teamForm.valid) {
      return true;
    }
    return false;
  }

}
