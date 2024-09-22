import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  BreadcombComponent,
  ButtonComponent,
  TreeComponent,
  WebSerialActions,
  WebSerialService,
} from '../../shared';

@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [BreadcombComponent, ButtonComponent, TreeComponent, RouterOutlet],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss',
})
export default class LayoutMainComponent {
  store = inject(Store);
  service = inject(WebSerialService);

  label = 'connect';
  isSerialConnected = true;

  ngOnInit() {
    this.store.dispatch(WebSerialActions.init());
  }

  onClick() {
    this.store.dispatch(WebSerialActions.init());
  }
}
