
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AuthorsComponent } from './authors/authors.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'authors/add',component: AddAuthorComponent },
  { path: 'quotes/add/:id',component: AddQuoteComponent },
  { path: 'authors/edit/:id',component: EditAuthorComponent },
  { path: 'authors-app',component: AuthorsComponent },
  { path: 'quotes-app/:id',component: QuotesComponent },
  { path: '', pathMatch: 'full', redirectTo: '/authors-app' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: AuthorsComponent }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }