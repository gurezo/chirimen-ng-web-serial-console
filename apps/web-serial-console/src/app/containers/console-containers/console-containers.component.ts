import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as WebSerialActions from '../../shared/store/actions/web-serial.actions';

@Component({
  selector: 'app-console-containers',
  standalone: true,
  imports: [],
  templateUrl: './console-containers.component.html',
  styleUrl: './console-containers.component.scss',
})
export class ConsoleContainersComponent implements OnInit {
  store = inject(Store);

  ngOnInit() {
    this.store.dispatch(WebSerialActions.initPort());
  }
}
