import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebSerialService {
  // TODO: シリアルポートの状態管理をどうするか
  // NgRx のルートストアに登録するか、サービス内で管理するか

  port: SerialPort;

  constructor() {
    this.port = new SerialPort();
  }

  async requestPort(): Promise<void> {
    try {
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 115200 });
    } catch (error) {}
  }

  async closePort() {
    try {
      await this.port.close();
    } catch (error) {}
  }

  /**
   *
   *
  onconnect: ((this: this, ev: Event) => any) | null;
  ondisconnect: ((this: this, ev: Event) => any) | null;

  getPorts(): Promise<SerialPort[]>;
  requestPort(options?: SerialPortRequestOptions): Promise<SerialPort>;
  addEventListener(
    type: 'connect' | 'disconnect',
    listener: (this: this, ev: Event) => any,
    useCapture?: boolean
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener(
    type: 'connect' | 'disconnect',
    callback: (this: this, ev: Event) => any,
    useCapture?: boolean
  ): void;
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean
  ): void;
   */
}
