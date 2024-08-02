import { SerialPort } from 'web-serial-polyfill';

export interface WebSerialState {
  isConnect: boolean;
  ports: SerialPort[];
  port: SerialPort | undefined;
}
