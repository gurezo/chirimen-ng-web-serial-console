import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@app/shared';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ButtonComponent],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
})
export class TopComponent {}
