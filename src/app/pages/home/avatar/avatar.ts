import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../../services/character.service';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class AvatarComponent {
  character = input<Character | null>();
}
