import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterService, Character } from '../../../services/character.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Post {
  id: number;
  title: string;
  content: string;
  date: Date;
  category: string;
  character?: Character | null;
}

@Component({
  selector: 'app-post-form',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './post-form.html',
  styleUrl: './post-form.css',
})
export class PostForm {
  postAdded = output<Post>();
  private characterService = inject(CharacterService);
  selectedCharacter = this.characterService.selectedCharacter;

  title = '';
  content = '';
  category = '';
  showValidationError = false;

  onSubmit() {
    if (!this.title.trim() || !this.content.trim() || !this.category.trim()) {
      this.showValidationError = true;
      return;
    }
    
    this.showValidationError = false;
    if (this.title.trim() && this.content.trim() && this.category.trim()) {
      const newPost: Post = {
        id: Date.now(),
        title: this.title,
        content: this.content,
        category: this.category,
        date: new Date(),
        character: this.characterService.getSelectedCharacter(),
      };

      this.postAdded.emit(newPost);

      // Formular zurücksetzen
      this.title = '';
      this.content = '';
      this.category = '';
    }
  }
}
