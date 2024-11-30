import { Routes } from '@angular/router';
import { PresentationComponent } from '../components/presentation/presentation.component';

export const routes: Routes = [
    {path: "", redirectTo: "/presentation", pathMatch: 'full'},
    {path: "presentation", component: PresentationComponent, title: "Presentation",
        children: [
            
        ]
    }
];
