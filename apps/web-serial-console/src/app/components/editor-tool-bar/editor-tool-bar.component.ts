import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-editor-tool-bar',
  standalone: true,
  imports: [MatDividerModule, MatIconModule, MatMenuModule],
  templateUrl: './editor-tool-bar.component.html',
  styleUrl: './editor-tool-bar.component.scss',
})
export class EditorToolBarComponent {}
