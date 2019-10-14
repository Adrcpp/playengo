import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from "../config/config"

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {  }

  public getAllPosts() {
    let url = this.formUrl('posts', new HttpParams());
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  public getImage(mediaId: string) {
    let url = this.formUrl('medias/' + encodeURIComponent(mediaId), new HttpParams());
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  public getUser(username: string) {
    let url = this.formUrl('users/' + username, new HttpParams());
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  private formUrl(path: string, params: HttpParams): string {
    return `${Config.API_ENDPOINT}${path}?${params.append('api_key', Config.API_KEY).toString()}`;
  }

  private handleError(error: HttpErrorResponse) {

    let errorMessage = 'Unknown error!';

    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);

    return throwError(errorMessage);

  }
}