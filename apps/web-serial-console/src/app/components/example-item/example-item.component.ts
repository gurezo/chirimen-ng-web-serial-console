import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ExampleItem } from '../../models';

@Component({
  selector: 'app-example-item',
  standalone: true,
  imports: [MatIconModule, MatTableModule, MatTooltipModule],
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
