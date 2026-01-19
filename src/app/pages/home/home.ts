import { Component } from '@angular/core';
import { PostForm } from './post-form/post-form';

@Component({
  selector: 'app-home',
  imports: [PostForm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
