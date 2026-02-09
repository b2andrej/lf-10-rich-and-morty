import { Injectable, signal, inject } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

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
  private localStorageService = inject(LocalStorageService);
  selectedCharacter = signal<Character | null>(null);

  constructor() {
    this.loadSelectedCharacterFromStorage();
  }

  private loadSelectedCharacterFromStorage(): void {
    const characterData = this.localStorageService.getItem('selectedCharacter');
    if (characterData) {
      this.selectedCharacter.set(JSON.parse(characterData));
    }
  }

  selectCharacter(character: Character) {
    this.selectedCharacter.set(character);
    this.localStorageService.setItem('selectedCharacter', JSON.stringify(character));
  }

  getSelectedCharacter() {
    return this.selectedCharacter();
  }
}
