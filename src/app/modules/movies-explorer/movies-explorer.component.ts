import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subject, debounceTime, distinctUntilChanged, fromEvent, map, merge, switchMap, takeUntil, tap } from 'rxjs';
import { FiltersDto } from 'src/app/models/filter.dto';
import { MovieResults } from 'src/app/models/movie-result.dto';
import { MoviesService } from 'src/app/services/movies-explorer.service';


@Component({
  selector: 'movies-explorer',
  templateUrl: './movies-explorer.component.html',
  styleUrls: ['./movies-explorer.component.scss']
})
export class MoviesExplorerComponent implements AfterViewInit, OnDestroy {

  public moviesData$?: Observable<MovieResults>
  public filtersDto: FiltersDto = new FiltersDto
  private destroy$ = new Subject<void>();

  @ViewChild('searchInput') input?: ElementRef;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private moviesService: MoviesService) { }

  public ngAfterViewInit(): void {
    this.initializeMoviesDataStream();   
  }

  private initializeMoviesDataStream(): void {

    const initialMovies$: Observable<MovieResults> = this.moviesService.loadMovies(this.filtersDto);

    const searchMovies$: Observable<MovieResults> = fromEvent<Observable<MovieResults>>(this.input?.nativeElement, 'keyup')
    .pipe(
      takeUntil(this.destroy$),
      tap(() => this.paginator?.firstPage()),
      map((event: any) => event.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(() => this.moviesService.loadMovies(this.filtersDto))
    );

    const pagination$ = this.paginator!.page.pipe(
      takeUntil(this.destroy$),
      tap((event) => {
        this.filtersDto.pagination!.pageIndex = event.pageIndex + 1;
        this.filtersDto.pagination!.pageSize = event.pageSize;
      }),
      switchMap(() => this.moviesService.loadMovies(this.filtersDto))
    );

    this.moviesData$ = merge(initialMovies$, searchMovies$, pagination$)
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
