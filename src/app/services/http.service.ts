import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(private httpClientService: HttpClient){}
  
    private get baseUrl(): string {
        return environment.baseUrl;
    }

    private getRequestUrl(url:string): string {
        return `${this.baseUrl}${url}`;
    }

    get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
        return this.httpClientService.get<T>(this.getRequestUrl(url), {headers, params});
    }

    post<T>(url: string, body: any | null, headers?: HttpHeaders): Observable<T> {
        return this.httpClientService.post<T>(this.getRequestUrl(url), body, {headers});
    }

    put<T>(url: string, body:any | null, headers?: HttpHeaders): Observable<T> {
        return this.httpClientService.put<T>(this.getRequestUrl(url), body, {headers});
    }

    delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
        return this.httpClientService.delete<T>(this.getRequestUrl(url), {headers});
    }
}