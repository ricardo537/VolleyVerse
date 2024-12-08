import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [ RouterOutlet, RouterLink ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
  public visitor: string = "user";

  //En caso que una vez que se acceda al home se quiera borrar la sesión entonces solo habrá que borrarla en esta parte del código

  changeVisitor(): void {
    if (this.visitor == "player") {
      this.visitor = "club";
    } else {
      this.visitor = "player";
    }
  }

}
