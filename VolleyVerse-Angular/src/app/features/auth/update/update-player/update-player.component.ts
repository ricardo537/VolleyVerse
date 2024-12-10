import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePlayerDTO } from 'src/app/models/dto/update-player-dto';
import { PlayerService } from '../../player.service';
import { LoginDTO } from 'src/app/models/dto/login-dto';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-update-player',
  imports: [ ReactiveFormsModule, HttpClientModule ],
  templateUrl: './update-player.component.html',
  styleUrl: './update-player.component.css',
  providers: [ PlayerService ]
})
export class UpdatePlayerComponent {
  updateForm: FormGroup;
  public message: string = "";

  constructor (formBuilder: FormBuilder, private playerService: PlayerService, private router: Router) {
    this.updateForm = formBuilder.group({
      email: ['', []],
      password: ['', []],
      password_confirm: ['', []],
      name: ['', []],
      last_name: ['', []],
      description: ['', []]
    })
  }

  public updatePlayer () {
    const update: UpdatePlayerDTO|string = UpdatePlayerDTO.fromJSON(this.updateForm.value);

    if (typeof update === "string") {
      this.message = update;
    } else {
      this.playerService.updatePlayer(update).subscribe({
        next: (response : LoginDTO) => {
          console.log(response);
          sessionStorage.setItem("token", JSON.stringify(response));
          this.router.navigate(["/volleyverse/dashboard"]);
        },
        error: (error) => {
          this.message = "Los datos de la sesión no coinciden con ningún usuario dentro de la base de datos";
        }
      });
    }
  }

}
