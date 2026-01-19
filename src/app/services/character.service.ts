import { Injectable, signal } from '@angular/core';

export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  selectedCharacter = signal<Character | null>(null);

  selectCharacter(character: Character) {
    this.selectedCharacter.set(character);
  }

  getSelectedCharacter() {
    return this.selectedCharacter();
  }
}
