import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieDto } from 'src/app/models/movie.dto';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'movie-full-info',
  templateUrl: './movie-full-info.component.html',
  styleUrls: ['./movie-full-info.component.scss']
})
export class MovieFullInfoComponent implements OnInit {

  public movieData?: MovieDto;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.movieData = this.data;
  }

  public onBackClick(): void {
    this.dialogService.closeDialog();
  }
}
