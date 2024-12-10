import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterPlayerDTO } from 'src/app/models/dto/register-player-dto';
import { Router } from '@angular/router';
import { PlayerService } from '../../player.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register-player',
  imports: [ CommonModule, ReactiveFormsModule, HttpClientModule ],
  templateUrl: './register-player.component.html',
  styleUrl: './register-player.component.css',
  providers: [PlayerService]
})
export class RegisterPlayerComponent {
  public message: string = "";
  registerForm: FormGroup;

  constructor (private formBuilder: FormBuilder, private playerService: PlayerService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password_confirm: ['', [Validators.required]],
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]]
    })
  }

  public register(): void {
    const register: RegisterPlayerDTO|string = RegisterPlayerDTO.fromJSON(this.registerForm.value);
    if (typeof register === "string") {
      this.message = register;
    } else {
      this.playerService.registerPlayer(register).subscribe({
        next: (response) => {
          if (response) {
            this.router.navigate(['/volleyverse/presentation/login']);
          } 
        }, 
        error: (error) => {
          this.message = "El usuario con ese email ya esta registrado."
        }
      });
    }
  }
}
