import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'movies-explorer', pathMatch: 'full' },
  { path: 'movies-explorer', loadChildren: () => import('./modules/movies-explorer/movies-explorer.module').then(m => m.MoviesExplorerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
