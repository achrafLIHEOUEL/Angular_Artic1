import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { ListSuggestionComponent } from './suggestion-list/list-suggestion.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SuggestionsComponent,
    SuggestionDetailsComponent,
    ListSuggestionComponent,
    SuggestionFormComponent,
    SuggestionFormComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SuggestionsModule { }
