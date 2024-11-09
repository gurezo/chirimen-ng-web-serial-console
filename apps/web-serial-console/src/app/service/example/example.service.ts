import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleJson } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  http = inject(HttpClient);

  getJsonArray(path: string): Observable<Array<ExampleJson>> {
    return this.http.get<Array<ExampleJson>>(path);
  }

  downloadMainJs(exampleName: string): Observable<Blob> {
    return this.http.get(
      'https://tutorial.chirimen.org/pizero/esm-examples/' +
        exampleName +
        'main.js',
      {
        responseType: 'blob',
      },
    );
  }
}
