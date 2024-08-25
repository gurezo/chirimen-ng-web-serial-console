export interface WebSerialState {
  isConnect: boolean;
  ports: SerialPort[];
  port: SerialPort | undefined;
}
