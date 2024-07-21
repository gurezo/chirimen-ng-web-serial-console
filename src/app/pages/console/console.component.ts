import { Component, inject, OnInit } from '@angular/core';
import { WebSerialService } from '@app/shared';
import { ConsoleContainersComponent } from '../../containers';

@Component({
  selector: 'app-console',
  standalone: true,
  imports: [ConsoleContainersComponent],
  template: `<app-console-containers />`,
  providers: [WebSerialService],
})
export default class ConsoleComponent implements OnInit {
  webSerial = inject(WebSerialService);

  async ngOnInit() {
    // await this.webSerial.requestPort();
    await this.webSerial.getPorts();
  }
}
