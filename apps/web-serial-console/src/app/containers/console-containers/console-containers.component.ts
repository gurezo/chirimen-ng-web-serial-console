import { AfterViewInit, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Terminal } from '@xterm/xterm';
import { ConsoleToolBarComponent } from '../../components';
import { xtermConsoleConfigOptions } from '../../models';
import { WebSerialService, XtermService } from '../../service';

@Component({
  selector: 'app-console-containers',
  standalone: true,
  imports: [ConsoleToolBarComponent],
  templateUrl: './console-containers.component.html',
  styleUrl: './console-containers.component.scss',
  providers: [WebSerialService],
})
export class ConsoleContainersComponent implements AfterViewInit {
  store = inject(Store);
  service = inject(WebSerialService);
  xtermService = inject(XtermService);

  label = 'connect';
  xterminal = new Terminal(xtermConsoleConfigOptions);
  consoleDom: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.configTerminal();
  }

  private configTerminal() {
    this.consoleDom = document.getElementById('consoleDom');
    if (this.consoleDom) {
      this.xterminal.open(this.consoleDom);
    } else {
      return;
    }

    this.xterminal.reset();
    this.xterminal.write('$ ');

    this.xterminal.onKey((e) => this.xtermService.onKey(this.xterminal, e));
  }
}
