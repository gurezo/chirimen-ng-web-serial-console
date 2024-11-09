import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ExampleItem } from '../../models';

@Component({
  selector: 'app-example-item',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './example-item.component.html',
  styleUrl: './example-item.component.scss',
})
export class ExampleItemComponent {
  @Input() exampleItem!: ExampleItem[];
  displayedColumns: string[] = [
    'id',
    'title',
    'overview',
    'js',
    'circuit',
    'link',
  ];
}
