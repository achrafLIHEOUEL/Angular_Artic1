import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../SuggestionService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent implements OnInit {

  suggestions: Suggestion[] = [];
  favorites: Suggestion[] = [];
  searchText: string = '';

  constructor(private suggestionService: SuggestionService , private router: Router) {}

  ngOnInit(): void {
    this.suggestions = this.suggestionService.getSuggestions();
  }

  likeSuggestion(suggestion: Suggestion): void {
    this.suggestionService.likeSuggestion(suggestion.id);
  }

  addToFavorites(suggestion: Suggestion): void {
    this.suggestionService.addToFavorites(this.favorites, suggestion);
  }

  get filteredSuggestions(): Suggestion[] {
    if (!this.searchText) return this.suggestions;
    const searchLower = this.searchText.toLowerCase();
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(searchLower) ||
      s.category.toLowerCase().includes(searchLower)
    );
  }

  goToAddSuggestion(): void {
  this.router.navigate(['/suggestions/add']);
}

}

