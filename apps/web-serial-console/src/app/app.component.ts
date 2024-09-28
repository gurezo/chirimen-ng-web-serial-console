import { Component, inject, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'chirimen-ng-web-serial-console';
  private domSanitizer = inject(DomSanitizer);
  private matIconRegistry = inject(MatIconRegistry);

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon(
      'terminal',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '/terminal_24dp_5F6368.svg',
      ),
    );
  }
}
