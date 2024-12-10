import { Routes } from '@angular/router';
import { PresentationComponent } from './shared/components/presentation/presentation.component';
import { RegisterClubComponent } from './features/auth/register/register-club/register-club.component';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { authSessionGuard } from './core/guards/auth-session.guard';
import { RegisterPlayerComponent } from './features/auth/register/register-player/register-player.component';
import { OutOfSessionGuard } from './core/guards/out-of-session.guard';
import { ProfileComponent } from './features/auth/profile/player-profile/player-profile.component';

export const routes: Routes = [
    { path: 'volleyverse', title: 'VolleyVerse',
        children: [
            { path: 'presentation', component: PresentationComponent, canActivate: [OutOfSessionGuard], 
                children: [
                    { path: 'register/player', component: RegisterPlayerComponent, title: 'Register a user' },
                    { path: 'register/club', component: RegisterClubComponent, title: 'Register a club' },
                    { path: 'login', component: LoginComponent, title: 'Iniciar sesión' },
                ]
            },
            { path: 'dashboard', component: DashboardComponent, title: 'Dashboard', canActivate: [authSessionGuard], 
                children: [
                    { path: 'profile', component: ProfileComponent, title: 'Profile' }
                    //Hay que cambiarlo por el componente home, lo único que aún no está creado
                ]
            },
            { path: '', redirectTo: '/volleyverse/presentation/login', pathMatch: 'full' },
            { path: '**', redirectTo: '/volleyverse/presentation/login', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: '/volleyverse/presentation/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/volleyverse/presentation/login', pathMatch: 'full' }
];

