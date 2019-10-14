import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Config } from "../config/config"

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {  }

  public getAllPosts() {
    let url = this.formUrl(new HttpParams());
    return this.http.get(url).pipe(catchError(this.handleError));

  }

  public getImage(mediaId: string) {
    let params = new HttpParams().append('api_key', Config.API_KEY);
  }

  private formUrl(params: HttpParams): string {
    params.append('api_key', Config.API_KEY);
    return `${Config.API_ENDPOINT}?${params.toString()}`;
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