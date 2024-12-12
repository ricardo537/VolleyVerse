import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/auth.service';

@Component({
  selector: 'app-update-img',
  imports: [],
  templateUrl: './update-img.component.html',
  styleUrl: './update-img.component.css',
  providers: [ AuthService ]
})
export class UpdateImgComponent {
  public message: string = "";

  constructor (private authService: AuthService, private router: Router) {

  }

  public updateImg (event: any) {
    const token = sessionStorage.getItem("token");
    if (typeof token === "string") {
      const file = event.target.files[0];
      const login = JSON.parse(token);
      const formData: FormData = new FormData();
      formData.append('file', file)
      this.authService.updateProfileImg(login.email, formData).subscribe({
        next: (response) => {
          if (response.url === "") {
            this.message = "No se ha podido registrar la imagen en la base de datos";
          } else {
            this.router.navigate(["/volleyverse/dashboard"])
          }
        },
        error: (error) => {
          this.message = "Hubo un problema al enviar el archivo";
        }
      });
    } else {
      this.message = "No hay datos de sesión, por favor inicie sesión";
    }
    console.error(this.message);
  }
}
