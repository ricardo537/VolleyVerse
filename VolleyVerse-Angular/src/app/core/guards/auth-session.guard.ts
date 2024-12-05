import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { SessionDTO } from '../../models/dto/session-dto';

@Injectable({
  providedIn: 'root'
})
export class authSessionGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const session = this.getSession();

    if (session !== null) {
      return true;
    } else {
      //Hay que cambiar la ruta segun la que escriba en el app.routes.ts
      this.router.navigate(['login']);
      return false;
    }
  }

  getSession(): SessionDTO|null {
    //falta revisar como se introducirá en el sessionStorage
    const sessionData = localStorage.getItem("session");
    if (sessionData) {
      try {
        return JSON.parse(sessionData) as SessionDTO;
      } catch (error) {
        console.error("Error parsing session data", error);
        return null;
      }
    } else {
      return null;
    }
  }
}