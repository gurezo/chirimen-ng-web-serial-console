import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { SerialPort } from 'web-serial-polyfill';

interface SerialPortInfo {
  usbVendorId: number;
  usbProductId: number;
}

// Raspberry Pi Zero の USB ベンダーIDとプロダクトID (例)
const RASPBERRY_PI_ZERO_INFO: SerialPortInfo = {
  usbVendorId: 0x1d6b,
  usbProductId: 0x0601,
};

@Injectable({
  providedIn: 'root',
})
export class WebSerialService {
  // @ts-ignore
  private port: SerialPort | null = null;
  // private nav = navigator as Navigator & { serial: Serial };

  async isRaspberryPiZero(port: any) {
    const info = await port.getInfo();
    return (
      info.usbVendorId === RASPBERRY_PI_ZERO_INFO.usbVendorId &&
      info.usbProductId === RASPBERRY_PI_ZERO_INFO.usbProductId
    );
  }

  async connect(): Promise<boolean> {
    try {
      // this.port = await navigator.serial.requestPort();
      // // this.port = await this.nav.serial.requestPort();
      // await this.port.open({ baudRate: 115200 });
      const serialPort = await navigator.serial.requestPort();
      await serialPort.open({ baudRate: 115200 });

      // 選択されたポートが Raspberry Pi Zero かどうかを判定
      const isPiZero = await this.isRaspberryPiZero(serialPort);

      if (isPiZero) {
        console.log('接続されたデバイスは Raspberry Pi Zero です。');
        alert('OK!!! 接続されたデバイスは Raspberry Pi Zero です。');
        return true;
      } else {
        console.log('接続されたデバイスは Raspberry Pi Zero ではありません。');
        alert('NG!!! 接続されたデバイスは Raspberry Pi Zero ではありません。');
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error connecting to serial port:', error);
      return false;
    }
  }

  sendData(data: string): Observable<void> {
    if (!this.port) {
      return throwError(() => new Error('Serial port not connected'));
    }

    const encoder = new TextEncoder();
    const writer = this.port.writable?.getWriter();
    if (!writer) {
      return throwError(() => new Error('Serial port not connected'));
    }

    return from(writer.write(encoder.encode(data))).pipe(
      map(() => {
        writer.releaseLock();
      }),
      catchError((error) => {
        console.error('Error sending data:', error);
        writer.releaseLock();
        return throwError(() => error);
      }),
    );
  }

  readData(): Observable<string> {
    if (!this.port) {
      return throwError(() => new Error('Serial port not connected'));
    }

    const reader = this.port.readable?.getReader();
    const decoder = new TextDecoder();
    if (!reader) {
      return throwError(() => new Error('Serial port not connected'));
    }

    return new Observable<string>((observer) => {
      const readChunk = () => {
        reader
          .read()
          .then(({ value, done }) => {
            if (done) {
              observer.complete();
              return;
            }
            const chunk = decoder.decode(value);
            observer.next(chunk);
            readChunk();
          })
          .catch((error) => {
            observer.error(error);
          });
      };

      readChunk();

      return () => {
        reader.releaseLock();
      };
    });
  }
}
