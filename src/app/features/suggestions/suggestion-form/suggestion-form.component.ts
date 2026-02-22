import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuggestionService } from '../SuggestionService';
@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css',

})
export class SuggestionFormComponent {

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  suggestionForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private suggestionService: SuggestionService) {
    this.suggestionForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[A-Z][a-zA-Z]*$')]],
      description: ['', [Validators.required, Validators.minLength(30)]],
      category: ['', Validators.required],
      date: [{ value: new Date().toLocaleDateString('fr-FR'), disabled: true }],
      status: [{ value: 'en attente', disabled: true }]
    });
  }

  get title() { return this.suggestionForm.get('title')!; }
  get description() { return this.suggestionForm.get('description')!; }
  get category() { return this.suggestionForm.get('category')!; }

 

  onSubmit(): void {
  if (this.suggestionForm.invalid) return;

  const formValue = this.suggestionForm.getRawValue();
  this.suggestionService.addSuggestion({
    id: 0,
    title: formValue.title,
    description: formValue.description,
    category: formValue.category,
    date: new Date(),
    status: 'en attente',
    nbLikes: 0
  });

  this.router.navigate(['/listsuggestion']);
}
}
