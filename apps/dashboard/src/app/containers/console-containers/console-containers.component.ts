import { Dialog } from '@angular/cdk/dialog';
import { AfterViewInit, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Store } from '@ngrx/store';
import { Terminal } from '@xterm/xterm';
import { ConsoleToolBarComponent } from '../../components';
import { sleep } from '../../functions';
import { xtermConsoleConfigOptions } from '../../models';
import { WebSerialService, XtermService } from '../../service';
import { DialogService } from '../../service/dialog/dialog.service';

@Component({
  selector: 'app-console-containers',
  standalone: true,
  imports: [ConsoleToolBarComponent, MatDividerModule],
  templateUrl: './console-containers.component.html',
  styleUrl: './console-containers.component.scss',
  providers: [WebSerialService],
})
export class ConsoleContainersComponent implements AfterViewInit {
  store = inject(Store);
  service = inject(WebSerialService);
  xtermService = inject(XtermService);
  dailogService = inject(DialogService);
  dialog = inject(Dialog);

  label = 'connect';
  xterminal = new Terminal(xtermConsoleConfigOptions);
  consoleDom: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.configTerminal();
  }

  openWifiSettingDialog() {
    this.dailogService.openWifiSettingDialog();
  }

  createFile() {}

  openExampleFrameDialog() {
    this.dailogService.openExampleFrameDialog();
  }

  openSetupChirimenDialog() {
    this.dailogService.openSetupChirimenDialog();
  }
  openI2CDetectDialog() {
    this.dailogService.openI2CDetectDialog();
  }

  openFileUploadDialog() {
    this.dailogService.openFileUploadDialog();
  }

  private configTerminal() {
    this.consoleDom = document.getElementById('consoleDom');
    if (this.consoleDom) {
      this.xterminal.open(this.consoleDom);
    } else {
      return;
    }

    // this.xterminal.reset();
    // this.xterminal.writeln('$ ');

    this.xterminal.onKey((e) => this.xtermService.onKey(this.xterminal, e));

    this.demoConsole();
  }

  private async demoConsole() {
    this.xterminal.reset();
    this.xterminal.writeln('<<CONNECTED>');
    this.xterminal.writeln('Waiting promp');
    this.xterminal.writeln('.....');
    this.xterminal.writeln(' ');

    await sleep(3000);
    this.xterminal.writeln('raspberrypi login: pi');
    this.xterminal.writeln('Password:');
    this.xterminal.writeln(' ');

    await sleep(3000);
    this.xterminal.writeln(
      'Linux raspberrypi 6.6.31+rpt-rpi-v6 #1 Raspbian 1:6.6.31-1+rpt1 (2024-05-29) armv6l',
    );
    this.xterminal.writeln(' ');
    this.xterminal.writeln(
      'The programs included with the Debian GNU/Linux system are free software;',
    );
    this.xterminal.writeln(
      'the exact distribution terms for each program are described in the individual files in /usr/share/doc/*/copyright',
    );
    this.xterminal.writeln(' ');

    await sleep(3000);
    this.xterminal.writeln(
      'Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent',
    );
    this.xterminal.writeln('permitted by applicable law');
    this.xterminal.writeln('Last login: Sat Nov 16 17:58:38 JST 2024 on ttyGS');
    this.xterminal.writeln('pi@raspberrypi:~$ HISTCONTROL=ignorebot');
    this.xterminal.writeln(' ');

    await sleep(3000);
    this.xterminal.writeln(
      'pi@raspberrypi:~$ sudo timedatectl set-timezone Asia/Tokyo',
    );
    this.xterminal.writeln('pi@raspberrypi:~$ sudo date 111722412024.1');
    this.xterminal.writeln('2024年 11月 17日 日曜日 22:41:14 JS');

    await sleep(3000);
    this.xterminal.writeln('pi@raspberrypi:~$ pw');
    this.xterminal.writeln('/home/p');
    this.xterminal.writeln(' ');

    await sleep(1000);
    this.xterminal.writeln('pi@raspberrypi:~$ cd -');
    this.xterminal.writeln('pi@raspberrypi:~$ ls -al --quoting-style=');
    this.xterminal.writeln('合計 4');
    this.xterminal.writeln('drwx------ 6 pi pi 4096 9月 16 14:57 ".');
    this.xterminal.writeln('drwxr-xr-x 3 root root 4096 8月 21 12:13 "..');
    this.xterminal.writeln('-rw------- 1 pi pi 34 9月 16 14:57 ".bash_history');
    this.xterminal.writeln('-rw-r--r-- 1 pi pi 220 8月 21 12:13 ".bash_logout');
    this.xterminal.writeln('-rw-r--r-- 1 pi pi 3523 8月 21 12:13 ".bashrc');
    this.xterminal.writeln('drwxr-xr-x 3 pi pi 4096 8月 21 12:22 ".cache');
    this.xterminal.writeln('drwx------ 4 pi pi 4096 10月 5 14:51 ".forever');
    this.xterminal.writeln('drwxr-xr-x 4 pi pi 4096 8月 21 12:21 ".npm');
    this.xterminal.writeln('-rw-r--r-- 1 pi pi 807 8月 21 12:13 ".profile');
    this.xterminal.writeln(
      '-rw-r--r-- 1 pi pi 0 8月 21 12:30 ".sudo_as_admin_successful"',
    );
    this.xterminal.writeln('drwxr-xr-x 3 pi pi 4096 11月 10 16:40 "myApp');
    this.xterminal.writeln('-rwxr-xr-x 1 pi pi 463 9月 1 15:11 "wifi_setup.sh');
    this.xterminal.writeln(' ');

    await sleep(1000);
    this.xterminal.writeln('pi@raspberrypi:~$');
  }
}
