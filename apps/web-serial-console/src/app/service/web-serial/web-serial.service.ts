import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebSerialService {
  // TODO: シリアルポートの状態管理をどうするか
  // NgRx のルートストアに登録するか、サービス内で管理するか
  // serialPort: SerialPort | undefined = undefined;
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
      const serialPort = await navigator.serial.requestPort();
      await serialPort.open({ baudRate: 115200 });
      console.log('this.serialPort', serialPort);
      return serialPort;
    } catch (error) {
      return null;
    }
  }

  portWrite(serialPort: SerialPort, data: any): boolean {
    if (!serialPort) {
      return false;
    }

    try {
      const writer = serialPort?.writable?.getWriter();
      writer?.write(this.encoder.encode(data));
      writer?.releaseLock();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  portRead(serialPort: SerialPort) {
    if (!serialPort) {
      return false;
    }

    try {
      const reader = serialPort?.readable?.getReader();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async closePort(serialPort: SerialPort): Promise<boolean> {
    try {
      serialPort?.close();
    } catch (error) {
      console.error(error);
    } finally {
      return true;
    }
  }
}
