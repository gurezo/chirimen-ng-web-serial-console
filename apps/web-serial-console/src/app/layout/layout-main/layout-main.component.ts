import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ConsoleContainersComponent,
  EditorContainersComponent,
} from '../../containers';
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
  imports: [
    BreadcombComponent,
    ButtonComponent,
    ConsoleContainersComponent,
    EditorContainersComponent,
    TreeComponent,
  ],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss',
})
export default class LayoutMainComponent {
  store = inject(Store);
  service = inject(WebSerialService);

  label = 'connect';
  mode = 'editor';

  ngOnInit() {
    this.store.dispatch(WebSerialActions.init());
  }

  onClick() {
    this.store.dispatch(WebSerialActions.init());
  }
}
