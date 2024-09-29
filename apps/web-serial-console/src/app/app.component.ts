import { Component, inject, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

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
      this.domSanitizer.bypassSecurityTrustResourceUrl('/terminal.png'),
    );
    this.matIconRegistry.addSvgIcon(
      'upload',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/upload.png'),
    );
    this.matIconRegistry.addSvgIcon(
      'settings',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/settings.png'),
    );
    this.matIconRegistry.addSvgIcon(
      'sync',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/sync.png'),
    );
    this.matIconRegistry.addSvgIcon(
      'sync_disabled',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/sync_disabled.png'),
    );
    this.matIconRegistry.addSvgIcon(
      'lan',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/lan.png'),
    );
  }
}
