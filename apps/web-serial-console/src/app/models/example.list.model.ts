import { ExampleJson } from './example.model';

export interface ExampleList extends ExampleJson {
  js: string;
  circuit: string;
  link: string;
}
