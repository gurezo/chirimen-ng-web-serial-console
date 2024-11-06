import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  http = inject(HttpClient);

  getJsonArray<T>(path: string): Observable<Array<T>> {
    return this.http.get<Array<T>>(path);
  }
}
