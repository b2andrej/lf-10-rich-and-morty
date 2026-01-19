import { Component } from '@angular/core';
import { ProfileForm } from './profile-form/profile-form';
import { Characters } from './characters/characters';

@Component({
  selector: 'app-profile',
  imports: [ProfileForm, Characters],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
