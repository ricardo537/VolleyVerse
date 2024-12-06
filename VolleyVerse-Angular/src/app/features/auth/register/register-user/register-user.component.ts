import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterUserDTO } from 'src/app/models/dto/register-user-dto';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register-user',
  imports: [ CommonModule, ReactiveFormsModule, HttpClientModule ],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
  providers: [UserService]
})
export class RegisterUserComponent {
  public message: string = "";
  registerForm: FormGroup;

  constructor (private formBuilder: FormBuilder, private authService: UserService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password_confirm: ['', [Validators.required]],
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]]
    })
  }

  public register(): void {
    const register: RegisterUserDTO|string = RegisterUserDTO.fromJSON(this.registerForm.value);
    if (typeof register === "string") {
      this.message = register;
    } else {
      this.authService.registerUser(register).subscribe({
        next: (response) => {
          if (response) {
            this.router.navigate(['/volleyverse/auth/login']);
          } 
        }, 
        error: (error) => {
          this.message = "El usuario con ese email ya esta registrado."
        }
      });
    }
  }
}
