import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-console-tool-bar',
  standalone: true,
  imports: [MatIconModule, MatMenuModule],
  templateUrl: './console-tool-bar.component.html',
  styleUrl: './console-tool-bar.component.scss',
})
export class ConsoleToolBarComponent {}
