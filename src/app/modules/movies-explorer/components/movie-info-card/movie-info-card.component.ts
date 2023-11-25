import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MovieDto } from 'src/app/models/movie.dto';
import { DialogService } from 'src/app/services/dialog.service';
import { MovieFullInfoComponent } from '../movie-full-info/movie-full-info.component';

@Component({
  selector: 'movie-info-card',
  templateUrl: './movie-info-card.component.html',
  styleUrls: ['./movie-info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieInfoCardComponent  {

  @Input() movieData?: MovieDto;
  @ViewChild('default') defaultTemplate?: TemplateRef<any>;

  constructor(private dialogService: DialogService) { }

  public onReadMoreClick(): void {
    this.dialogService.openDialog(MovieFullInfoComponent, {
      width: window.innerWidth > 700 ? '70%' : '90%',
      maxWidth: '80vw'
    }, {selectedMovie: this.movieData, template: this.defaultTemplate})
  }  
}
