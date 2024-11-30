import { Routes } from '@angular/router';
import { PresentationComponent } from '../components/presentation/presentation.component';
import { RegisterUserComponent } from '../components/presentation/register/register-user/register-user.component';
import { RegisterClubComponent } from '../components/presentation/register/register-club/register-club.component';

export const routes: Routes = [
    { path: "", redirectTo: "/presentation", pathMatch: 'full' },
    { path: "presentation", component: PresentationComponent, title: "Presentation",
        children: [
            { path: "register/user", component: RegisterUserComponent, title: "Register a user" },
            { path: "register/club", component: RegisterClubComponent, title: "Register a club" }
        ]
    }
];
