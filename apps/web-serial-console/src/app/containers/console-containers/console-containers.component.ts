import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WebSerialService } from '../../shared';
import * as WebSerialActions from '../../shared/store/actions/web-serial.actions';

@Component({
  selector: 'app-console-containers',
  standalone: true,
  imports: [],
  templateUrl: './console-containers.component.html',
  styleUrl: './console-containers.component.scss',
  providers: [WebSerialService],
})
export class ConsoleContainersComponent implements OnInit {
  store = inject(Store);
  service = inject(WebSerialService);

  async ngOnInit() {
    this.store.dispatch(WebSerialActions.initPort());
    await this.service.requestPort();
  }
}
