import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ButtonComponent,
  TreeComponent,
  WebSerialActions,
  WebSerialService,
} from '../../shared';

@Component({
  selector: 'app-console-containers',
  standalone: true,
  imports: [ButtonComponent, TreeComponent],
  templateUrl: './console-containers.component.html',
  styleUrl: './console-containers.component.scss',
  providers: [WebSerialService],
})
export class ConsoleContainersComponent implements OnInit {
  store = inject(Store);
  service = inject(WebSerialService);

  label = 'connect';

  ngOnInit() {
    this.store.dispatch(WebSerialActions.initPort());
  }

  onClick() {
    this.store.dispatch(WebSerialActions.initPort());
  }
}
