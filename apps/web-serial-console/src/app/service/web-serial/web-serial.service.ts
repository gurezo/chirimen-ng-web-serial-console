import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { SerialPort } from 'web-serial-polyfill';

@Injectable({
  providedIn: 'root',
})
export class WebSerialService {
  private port: SerialPort | null = null;

  async connect(): Promise<boolean> {
    try {
      // this.port = await navigator.serial.requestPort();
      // await this.port.open({ baudRate: 115200 });
      const serialPort = await navigator.serial.requestPort();
      await serialPort.open({ baudRate: 115200 });
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
