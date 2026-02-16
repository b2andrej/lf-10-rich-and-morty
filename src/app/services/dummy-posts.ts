import { Post } from '../pages/home/post-form/post-form';

export const DUMMY_POSTS: Post[] = [
  {
    id: 1,
    title: 'Angular Basics verstanden!',
    content: 'Heute habe ich endlich die Grundlagen von Angular verstanden. Components, Services und Dependency Injection sind super wichtig!',
    category: 'Angular',
    date: new Date('2025-02-10'),
    character: null,
  },
  {
    id: 2,
    title: 'Erstes Projekt gestartet',
    content: 'Ich habe mein erstes Angular-Projekt gestartet. Es ist aufregend und ich lerne jeden Tag etwas Neues!',
    category: 'Angular',
    date: new Date('2025-02-09'),
    character: null,
  },
  {
    id: 3,
    title: 'Lernplan für diese Woche',
    content: 'Diese Woche möchte ich mich auf Forms und Reactive Forms konzentrieren. Das wird interessant!',
    category: 'Lernplan',
    date: new Date('2025-02-08'),
    character: null,
  },
  {
    id: 4,
    title: 'TypeScript lernen',
    content: 'TypeScript ist eigentlich gar nicht so schwer. Typen machen den Code viel sicherer!',
    category: 'Lernplan',
    date: new Date('2025-02-07'),
    character: null,
  },
];
