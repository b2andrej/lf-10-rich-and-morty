import { Component } from '@angular/core';
import { Characters } from './characters/characters';

@Component({
  selector: 'app-profile',
  imports: [Characters],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
