import { Component, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  imports: [CommonModule],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
})
export class Characters {
  private http = inject(HttpClient);
  characters = signal<any[]>([]);

  loadCharacters() {
    this.http.get('https://rickandmortyapi.com/api/character').subscribe((data: any) => {
      this.characters.set(data.results);
    });
  }

  constructor() {
    this.loadCharacters();
  }
}
