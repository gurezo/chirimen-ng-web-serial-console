import { Component, inject, OnInit } from '@angular/core';
import * as WebSerialActions from '@app/shared/store/actions/web-serial.actions';
import { Store } from '@ngrx/store';

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
