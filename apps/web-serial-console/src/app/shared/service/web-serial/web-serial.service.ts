import { Injectable } from '@angular/core';
// TODO: この import はどうするか
// 参照自体は、下記パスで出来る
// node_modules/.pnpm/@types+w3c-web-serial@1.0.6/node_modules/@types/w3c-web-serial/index.d.ts
// import { SerialPort } from 'web-serial-polyfill';

@Injectable({
  providedIn: 'root',
})
export class WebSerialService {
  // TODO: シリアルポートの状態管理をどうするか
  // NgRx のルートストアに登録するか、サービス内で管理するか
  serialPort: SerialPort | undefined = undefined;
  encoder = new TextEncoder();
  lang: string = 'en';

  constructor() {
    this.init();
  }

  init() {
    if (navigator.language == 'ja') {
      this.lang = navigator.language;
    }
  }

  async requestPort(): Promise<SerialPort | null> {
    try {
      this.serialPort = await navigator.serial.requestPort();
      await this.serialPort.open({ baudRate: 115200 });
      console.log('this.serialPort', this.serialPort);
      return this.serialPort;
    } catch (error) {
      return null;
    }
  }

  portWrite(data: any): boolean {
    if (!this.serialPort) {
      return false;
    }

    try {
      const writer = this.serialPort?.writable?.getWriter();
      writer?.write(this.encoder.encode(data));
      writer?.releaseLock();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  portRead() {
    if (!this.serialPort) {
      return false;
    }

    try {
      const reader = this.serialPort?.readable?.getReader();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async closePort(): Promise<boolean> {
    try {
      this.serialPort?.close();
    } catch (error) {
      console.error(error);
    } finally {
      return true;
    }
  }
}
