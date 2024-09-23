import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Terminal } from '@xterm/xterm';
import { WebSerialService } from '../../shared';

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

  ngOnInit() {
    const term = new Terminal({
      cols: 80,
      rows: 24,
      cursorBlink: true, //カーソルの点滅
      cursorStyle: 'underline', //カーソルをアンダーライン
      cursorWidth: 2, //カーソルの太さ
    });
    const terminal = document.getElementById('terminal');
    if (!terminal) {
      console.log('failed to detect #terminal');
      return;
    }

    term.open(terminal);
    term.reset();
    term.write('$ ');

    term.onKey((e) => {
      console.log(e);
      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

      if (ev.keyCode === 13) {
        term.write('\r\n$ ');
      } else if (ev.keyCode === 8) {
        term.write('\b \b');
      } else if (printable) {
        term.write(e.key);
      }
    });
  }
}
