import { Component } from '@angular/core';
import { UpdatePlayerComponent } from "../update/update-player/update-player.component";

@Component({
  selector: 'app-profile',
  imports: [UpdatePlayerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
