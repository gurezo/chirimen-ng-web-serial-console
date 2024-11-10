import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconService } from './service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'chirimen-ng-web-serial-console';
  iconService = inject(IconService);

  ngOnInit(): void {
    this.iconService.registIcons();
  }
}
