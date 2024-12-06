import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterClubDTO } from 'src/app/models/dto/register-club-dto';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClubService } from '../../club.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register-club',
  imports: [ ReactiveFormsModule, CommonModule, HttpClientModule ],
  templateUrl: './register-club.component.html',
  styleUrl: './register-club.component.css',
  providers: [ClubService]
})
export class RegisterClubComponent {
  public message: string = "";
  registerForm: FormGroup;

  constructor (private formBuilder: FormBuilder, private clubService: ClubService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password_confirm: ['', [Validators.required]],
      name: ['', [Validators.required]],
      zip_code: ['', [Validators.required]]
    })
  }

  public register(): void {
    const register: RegisterClubDTO|string = RegisterClubDTO.fromJSON(this.registerForm.value);
    if (typeof register === "string") {
      this.message = register;
    } else {
      this.clubService.registerClub(register).subscribe({
        next: (response) => {
          if (response) {
            this.router.navigate(['/presentacion/auth/login']);
          } else {
            this.message = "El club con ese email ya está registrado.";
          }
        }, 
        error: (error) => {
          this.message = "Ocurrió un error al conectar con el servidor.";
        }
      });
    }
  }
}
