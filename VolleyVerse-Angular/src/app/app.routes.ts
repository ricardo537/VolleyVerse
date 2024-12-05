import { Routes } from '@angular/router';
import { PresentationComponent } from './shared/components/presentation/presentation.component';
import { RegisterUserComponent } from './features/auth/register/register-user/register-user.component';
import { RegisterClubComponent } from './features/auth/register/register-club/register-club.component';

export const routes: Routes = [
    { path: 'volleyverse', component: PresentationComponent, title: 'VolleyVerse',
        children: [
            { path: "auth/register/user", component: RegisterUserComponent, title: "Register a user" },
            { path: "auth/register/club", component: RegisterClubComponent, title: "Register a club" }
        ]
     },
    { path: '', redirectTo: '/volleyverse', pathMatch: 'full' },
    { path: "**", redirectTo: '/volleyverse', pathMatch: 'full' }
];
