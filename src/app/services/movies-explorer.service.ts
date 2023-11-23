import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FiltersDto } from "src/app/models/filter.dto";
import { MovieResults } from "src/app/models/movie-result.dto";
import { HttpClientService } from "src/app/services/http.service";

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor(private httpService: HttpClientService){}

    public loadMovies(filtersDto: FiltersDto): Observable<MovieResults> {
        return this.httpService.get<MovieResults>(`/movies`, new HttpParams().set('filtersDto', JSON.stringify(filtersDto)))
      }
}