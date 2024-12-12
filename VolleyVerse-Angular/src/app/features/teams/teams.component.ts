import { Component } from '@angular/core';
import { AddTeamComponent } from './add-team/add-team.component';

@Component({
  selector: 'app-teams',
  imports: [ AddTeamComponent ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  public addForm: boolean = false;
  public requestsForm: boolean = false;

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

}
