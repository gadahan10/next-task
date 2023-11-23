import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { MovieRuntimePipe } from 'src/app/pipes/movie-runtime.pipe';
import { MoviesService } from 'src/app/services/movies-explorer.service';
import { MatDialogModule } from '@angular/material/dialog';
import { NextMoviesFooterComponent } from './next-movies-footer/next-movies-footer.component';
import { NextMoviesHeaderComponent } from './next-movies-header/next-movies-header.component';
import { DialogService } from 'src/app/services/dialog.service';
import { HttpClientService } from 'src/app/services/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NextMoviesFooterComponent,
    NextMoviesHeaderComponent,
    CustomButtonComponent,
    MovieRuntimePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,

    NextMoviesFooterComponent,
    NextMoviesHeaderComponent,
    CustomButtonComponent,
    
    MovieRuntimePipe
  ],
  providers: [
    HttpClientService,
    MoviesService,
    DialogService
  ]
})
export class SharedModule { }
