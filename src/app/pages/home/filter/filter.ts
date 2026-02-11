import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class FilterComponent {

  categories = ['Alle', 'Lernplan', 'Angular'];

  categorySelected = output<string>();
  
  activeCategory = 'Alle';

  selectCategory(category: string): void {
    this.activeCategory = category;
    this.categorySelected.emit(category);
  }
}
