import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './features/suggestions/suggestion-list/list-suggestion.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

const routes: Routes = [
   { path: 'notfound', component: NotfoundComponent },
   { path: 'suggestions', loadChildren: () => import('./features/suggestions/suggestions.module').then(m => m.SuggestionsModule) },
   { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
   { path: '', redirectTo: '/notfound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
