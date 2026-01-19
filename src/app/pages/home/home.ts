import { Component, inject } from '@angular/core';
import { PostForm, Post } from './post-form/post-form';
import { PostComponent } from './post/post';
import { AvatarComponent } from './avatar/avatar';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-home',
  imports: [PostForm, PostComponent, AvatarComponent, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private characterService = inject(CharacterService);
  selectedCharacter = this.characterService.selectedCharacter;
  posts: Post[] = [];

  onPostAdded(post: Post) {
    this.posts.unshift(post); // Füge neuen Post am Anfang hinzu
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }

  exportPost(post: Post) {
    const exportData = {
      characterName: post.character?.name || null,
      characterImage: post.character?.image || null,
      title: post.title,
      content: post.content,
      date: post.date,
    };
    const postData = JSON.stringify(exportData, null, 2);
    const blob = new Blob([postData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `post-${post.id}.txt`;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
