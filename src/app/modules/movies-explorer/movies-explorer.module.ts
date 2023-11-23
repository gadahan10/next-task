import { NgModule } from '@angular/core';
import { MoviesExplorerComponent } from './movies-explorer.component';
import { MoviesExplorerRoutingModule } from './movies-explorer-module';
import { MovieInfoCardComponent } from './components/movie-info-card/movie-info-card.component';
import { MovieFullInfoComponent } from './components/movie-full-info/movie-full-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MoviesExplorerComponent,
    MovieInfoCardComponent,
    MovieFullInfoComponent
    
  ],
  imports: [
    SharedModule,
    MoviesExplorerRoutingModule
  ]
})
export class MoviesExplorerModule { }
