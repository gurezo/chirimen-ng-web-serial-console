import { Component, inject, OnInit } from '@angular/core';
import { WebSerialService } from '@app/shared';

@Component({
  selector: 'app-console-containers',
  standalone: true,
  imports: [],
  templateUrl: './console-containers.component.html',
  styleUrl: './console-containers.component.scss',
  providers: [WebSerialService],
})
export class ConsoleContainersComponent implements OnInit {
  webSerial = inject(WebSerialService);

  async ngOnInit() {
    // await this.webSerial.requestPort();
    await this.webSerial.getPorts();
  }
}
