import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Header, Footer, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Rick and Morty Charaktere');

  // HttpClient injizieren
  private http = inject(HttpClient);

  // Signal für die Charakter-Daten
  characters = signal<any[]>([]);

  // Methode zum Laden der Daten
  loadCharacters() {
    this.http.get('https://rickandmortyapi.com/api/character').subscribe((data: any) => {
      this.characters.set(data.results);
    });
  }

  // Beim Start laden
  constructor() {
    this.loadCharacters();
  }
}
