import { Component, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-characters',
  imports: [CommonModule],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
})
export class Characters {
  private http = inject(HttpClient);
  private characterService = inject(CharacterService);
  characters = signal<any[]>([]);
  selectedCharacter = this.characterService.selectedCharacter;

  loadCharacters() {
    this.http.get('https://rickandmortyapi.com/api/character').subscribe((data: any) => {
      this.characters.set(data.results);
    });
  }

  selectCharacter(character: any) {
    this.characterService.selectCharacter(character);
  }

  constructor() {
    this.loadCharacters();
  }
}
