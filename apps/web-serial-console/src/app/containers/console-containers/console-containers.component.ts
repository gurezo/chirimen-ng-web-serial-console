import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Terminal } from '@xterm/xterm';
import { WebSerialService, xtermConsoleConfigOptions } from '../../shared';

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

  label = 'connect';
  // TODO: リファクタリングする
  // @ViewChild('terminal', { static: true }) terminal!: ElementRef;

  term = new Terminal(xtermConsoleConfigOptions);

  ngOnInit() {
    const terminal = document.getElementById('terminal');
    if (!terminal) {
      console.log('failed to detect #terminal');
      return;
    }

    this.term.open(terminal);

    this.term.reset();
    this.term.write('$ ');

    this.term.onKey((e) => {
      console.log(e);
      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

      if (ev.code === 'Enter') {
        this.term.write('\r\n$ ');
      } else if (ev.code === 'Backspace') {
        this.term.write('\b \b');
      } else if (printable) {
        this.term.write(e.key);
      }
    });
  }
}
