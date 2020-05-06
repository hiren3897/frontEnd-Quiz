import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericServiceService<T> {

  private baseUrl  = 'http://localhost:8181/quiz-rest/rest/';
  private endUrl: string;

  protected constructor(private http: HttpClient) { }

  getEndUrl(): string {
    return this.endUrl;
  }

  setEndUrl(value: string) {
    this.endUrl = value;
  }

  abstract getUrl(): string;

  post(object: T, cb: (response: T) => void){
    this.http.post<T>(this.baseUrl + this.getUrl() + this.endUrl, object).subscribe((data: T) =>
    cb(data)
    );
  }

  get(cb: (response: T) => void){
    this.http.get<T>(this.baseUrl + this.getUrl() + this.endUrl).subscribe((data: T) =>
      cb(data)
    );
  }

  postArray(object: T[], cb: (response: T[]) => void){
    this.http.post<T[]>(this.baseUrl + this.getUrl() + this.endUrl, object).subscribe((data: T[]) =>
      cb(data)
    );
  }

  delete(object: T, cb: (response: T) => void){
    this.http.delete<T>(this.baseUrl + this.getUrl() + this.endUrl, object).subscribe((data: T) =>
      cb(data)
    );
  }

  put(object: T, cb: (response: T) => void){
    this.http.put<T>(this.baseUrl + this.getUrl() + this.endUrl, object).subscribe((data: T) =>
      cb(data)
    );
  }

  getAll(cb: (response: T[]) => void){
    this.http.get<T[]>(this.baseUrl + this.getUrl() + this.endUrl).subscribe((data: T[]) => {
        cb(data);
    });
  }
}
