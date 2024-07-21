import { Injectable } from '@angular/core';
import { SerialPort } from 'web-serial-polyfill';
// TODOL: インポート文の実装を再検討
// import {
//   serial as polyfill,
//   SerialPort as SerialPortPolyfill,
// } from 'web-serial-polyfill';

@Injectable({
  providedIn: 'root',
})
export class WebSerialService {
  // TODO: シリアルポートの状態管理をどうするか
  // NgRx のルートストアに登録するか、サービス内で管理するか
  serialPort: SerialPort | undefined;
  navSerialPort: any;

  // async requestPort(): Promise<void> {
  //   try {
  //     const port = await navigator.serial.requestPort();
  //     const connect = await port.open({ baudRate: 115200 });
  //     console.log('port OK', connect);
  //   } catch (error) {
  //     console.log('error is', error);
  //     // console.error(error);
  //   }
  // }
  async requestPort(): Promise<void> {
    try {
      this.navSerialPort = await navigator.serial.requestPort();
    } catch (error) {
      // 未選択時の仕様をどうするか？
    }
  }

  // TODO: 一応仮実装、使い道あるかどうか？
  async getPorts(): Promise<void> {
    try {
      const ports = await navigator.serial.getPorts();
      console.log('port info: ', ports);
    } catch (error) {}
  }

  connectPort() {
    this.navSerialPort.open({ baudRate: 115200 });
  }

  async closePort() {
    try {
      this.serialPort?.close();
    } catch (error) {}
  }

  /**
   *
   *
   *
   *
  memo
  PiZeroWebSerialConsole code

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
