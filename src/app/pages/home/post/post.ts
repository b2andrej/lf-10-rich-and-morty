import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post-form/post-form';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class PostComponent {
  post = input.required<Post>();
  deletePost = output<number>();
  exportPost = output<Post>();

  onDelete() {
    this.deletePost.emit(this.post().id);
  }

  onExport() {
    this.exportPost.emit(this.post());
  }
}
