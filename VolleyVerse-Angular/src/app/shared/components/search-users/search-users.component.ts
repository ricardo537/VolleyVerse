import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayerService } from 'src/app/features/auth/player.service';
import { PlayerResumeDTO } from 'src/app/models/dto/player-resume-dto';

@Component({
  selector: 'app-search-users',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule ],
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css'],
  providers: [PlayerService]
})
export class SearchUsersComponent {
  public message: string = '';
  public searchQuery: string = '';
  public players: PlayerResumeDTO[] = [];

  constructor(private playerService: PlayerService) {}

  public search(): void {
    this.playerService.searchPlayers(this.searchQuery).subscribe({
      next: (response: PlayerResumeDTO[]) => {
        this.players = response;
        this.message = this.players.length === 0 ? 'No se han encontrado usuarios' : '';
      },
      error: (error) => {
        this.players = [];
        this.message = 'Ha ocurrido un error al realizar la búsqueda.';
      }
    });
  }

  public invitePlayer(id: string): void {

  }
}
