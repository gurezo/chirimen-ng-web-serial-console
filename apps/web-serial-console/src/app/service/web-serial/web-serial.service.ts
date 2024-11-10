import { Injectable } from '@angular/core';
// import { SerialPort } from 'web-serial-polyfill';

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

// import { computed, Injectable, signal } from '@angular/core';
// import { SerialPort } from 'web-serial-polyfill';

// @Injectable({
//   providedIn: 'root',
// })
// export class WebSerialService {
//   private port: SerialPort | undefined;
//   private reader: ReadableStreamDefaultReader<Uint8Array> | undefined;

//   private dataSignal = signal<any>(null);
//   private connectedSignal = signal<Event | null>(null);
//   private disconnectedSignal = signal<Event | null>(null);

//   public data = computed(() => this.dataSignal());
//   public connected = computed(() => this.connectedSignal());
//   public disconnected = computed(() => this.disconnectedSignal());

//   constructor() {
//     if (!('serial' in navigator)) {
//       console.error('WebSerial is not supported in this browser');
//       return;
//     }

//     navigator.serial.addEventListener('connect', this.serialConnect.bind(this));
//     navigator.serial.addEventListener(
//       'disconnect',
//       this.serialDisconnect.bind(this),
//     );
//   }

//   async openPort(thisPort: SerialPort): Promise<void> {
//     // Implementation for opening the port
//   }

//   async closePort(): Promise<void> {
//     // Implementation for closing the port
//   }

//   async sendSerial(data: string | ArrayBuffer): Promise<void> {
//     // Implementation for sending serial data
//   }

//   async listenForSerial(): Promise<void> {
//     // Implementation for listening to serial data
//     // When data is received:
//     // this.dataSignal.set(receivedData);
//   }

//   private serialConnect(event: Event): void {
//     console.log('Serial device connected', event);
//     this.connectedSignal.set(event);
//   }

//   private serialDisconnect(event: Event): void {
//     console.log('Serial device disconnected', event);
//     this.disconnectedSignal.set(event);
//   }
// }
