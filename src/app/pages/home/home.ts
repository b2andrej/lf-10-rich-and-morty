import { Component, inject } from '@angular/core';
import { PostForm, Post } from './post-form/post-form';
import { PostComponent } from './post/post';
import { AvatarComponent } from './avatar/avatar';
import { FilterComponent } from './filter/filter';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { DUMMY_POSTS } from '../../services/dummy-posts';

@Component({
  selector: 'app-home',
  imports: [PostForm, PostComponent, AvatarComponent, FilterComponent, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private characterService = inject(CharacterService);
  private localStorageService = inject(LocalStorageService);
  selectedCharacter = this.characterService.selectedCharacter;
  posts: Post[] = [];
  selectedCategory = 'Alle'; // Aktuell ausgewählte Kategorie

  constructor() {
    this.loadPostsFromStorage();
  }

  // Post Filter
  get filteredPosts(): Post[] {
    if (this.selectedCategory === 'Alle') {
      return this.posts;
    }
    return this.posts.filter(post => post.category === this.selectedCategory);
  }

  private loadPostsFromStorage(): void {
    const postsData = this.localStorageService.getItem('posts');
    if (postsData) {
      this.posts = JSON.parse(postsData);
    } else {
      // Dummy-Post laden
      this.posts = [...DUMMY_POSTS];
      this.savePostsToStorage();
    }
  }

  private savePostsToStorage(): void {
    this.localStorageService.setItem('posts', JSON.stringify(this.posts));
  }

  onPostAdded(post: Post) {
    this.posts.unshift(post);
    this.savePostsToStorage();
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
    this.savePostsToStorage();
  }

  exportPost(post: Post) {
    const exportData = {
      characterName: post.character?.name || null,
      characterImage: post.character?.image || null,
      title: post.title,
      content: post.content,
      category: post.category,
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

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
  }
}
