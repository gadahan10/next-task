import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { MovieRuntimePipe } from 'src/app/pipes/movie-runtime.pipe';
import { MoviesService } from 'src/app/services/movies-explorer.service';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    CustomButtonComponent,
    MovieRuntimePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    CustomButtonComponent,
    
    MovieRuntimePipe
  ],
  providers: [
    MoviesService,
  ]
})
export class SharedModule { }
