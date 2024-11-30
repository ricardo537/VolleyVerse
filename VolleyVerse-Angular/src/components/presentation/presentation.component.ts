import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
  public visitor: string = "user";

  changeVisitor(): void {
    if (this.visitor == "user") {
      this.visitor = "club";
    } else {
      this.visitor = "user";
    }
  }
}
