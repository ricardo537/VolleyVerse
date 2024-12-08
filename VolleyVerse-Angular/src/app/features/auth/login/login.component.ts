import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDTO } from 'src/app/models/dto/login-dto';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule, HttpClientModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})
export class LoginComponent {
  public message: string = "";
  formLogin: FormGroup;

  constructor (private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public login(): void {
    const login: LoginDTO|string = LoginDTO.fromJSON(this.formLogin.value);

    if (typeof login === "string") {
      this.message = login;
    } else {
      this.authService.login(login).subscribe({
        next: (response : LoginDTO) => {
          sessionStorage.setItem("token", JSON.stringify(response));
          this.router.navigate(['/volleyverse/dashboard']);
        },
        error: (error) => {
          this.message = "El usuario no existe por favor revise los datos introducidos.";
        }
      })
    }
  }
  
}
