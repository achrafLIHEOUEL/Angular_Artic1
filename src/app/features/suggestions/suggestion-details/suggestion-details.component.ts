import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';


@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent {

 suggestion!: Suggestion; 
 id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

  }
}
