import { Component } from '@angular/core';
import { UpdatePlayerComponent } from "../../update/update-player/update-player.component";
import { PlayerDTO } from 'src/app/models/dto/player-dto';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/models/dto/login-dto';
import { AuthService } from '../../auth.service';
import { UpdateImgComponent } from 'src/app/shared/components/update-img/update-img.component';

@Component({
  selector: 'app-player-profile',
  imports: [ UpdatePlayerComponent, UpdateImgComponent ],
  templateUrl: './player-profile.component.html',
  styleUrl: './player-profile.component.css', 
  providers: [ AuthService ]
})
export class PlayerProfileComponent {
  public playerData:PlayerDTO;
  public updateImgForm: boolean = false;

  constructor (private authService: AuthService, private router:Router) {
    const token = sessionStorage.getItem("token");

    if (token) {
      const login = JSON.parse(token);
      this.authService.getProfile(login).subscribe({
        next: (response : PlayerDTO) => {
          this.playerData = response;
        }, 
        error: (error) => {
          this.playerData = new PlayerDTO("Error al encontrar los datos del usuario", "", "", "");
        }
      })
    }

    this.playerData = new PlayerDTO("No hay una session sobre la que buscar los datos", "", "", "");
  }

  public logout (): void {
    sessionStorage.removeItem('token');
    this.router.navigate(["/volleyverse/presentation/login"]);
  }

  public showUpdateImgForm () {
    if (this.updateImgForm) {
      this.updateImgForm = false;
    } else {
      this.updateImgForm = true;
    }
  }

  public deleteAccount () {
    this.authService.delete(LoginDTO.getSession()).subscribe({
      next: (response) => {
        if (response) {
          sessionStorage.removeItem('token');
          this.router.navigate(["/volleyverse/presentation/login"]);
        }
      },
      error: (error) => { 
        console.error(error);
      }
    })
  }
}
