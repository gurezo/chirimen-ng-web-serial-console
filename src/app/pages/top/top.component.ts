import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
})
export class TopComponent {}
