import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchUsersComponent } from 'src/app/shared/components/search-users/search-users.component';

@Component({
  selector: 'app-add-team',
  imports: [ SearchUsersComponent, ReactiveFormsModule ],
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.css'
})
export class AddTeamComponent {

  public searchUserVisibility: boolean = false;
  public teamForm: FormGroup;
  public message: string = "";

  constructor (private formBuilder: FormBuilder) {
    this.teamForm = this.formBuilder.group({
      name: ['', Validators.required ],
      category: ['', Validators.required ],
      type: ['', Validators.required ]
    });
  }

  public selectMembers (): void {
    if (this.isValidData()) {
      this.searchUserVisibility = true;
      this.message = "";
    } else {
      this.message = "Tienes que rellenar los datos del equipo antes de poder invitar a gente";
    }
  }

  public isValidData(): boolean {
    if (this.teamForm.valid) {
      return true;
    }
    return false;
  }

}
