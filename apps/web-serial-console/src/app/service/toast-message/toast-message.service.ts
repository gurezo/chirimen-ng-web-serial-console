import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  WEB_SERIAL_ERROR_PORT_ALERADY_CONNECTED,
  WEB_SERIAL_ERROR_PORT_NO_SELECTED,
  WEB_SERIAL_IS_NOT_RASPBEYY_PI_ZERO,
} from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {
  toastr = inject(ToastrService);

  success(title: string, message: string): void {
    this.toastr.success(message, title);
  }

  error(title: string, message: string): void {
    this.toastr.error(message, title);
  }

  webSerailSuccess(): void {
    this.success(
      'Raspberry Pi Zero に正常接続されました。',
      'Web Serial Open Success',
    );
  }

  webSerailError(connectedResult: string): void {
    this.toastr.error(
      this.createErrorMessages(connectedResult),
      'Web Serial Open Fail',
    );
  }

  createErrorMessages(connectedResult: string): string {
    switch (connectedResult) {
      case WEB_SERIAL_IS_NOT_RASPBEYY_PI_ZERO:
        return '接続されたデバイスは Raspberry Pi Zero ではありません。';
      case WEB_SERIAL_ERROR_PORT_NO_SELECTED:
        return 'ポートが選択されていません。';
      case WEB_SERIAL_ERROR_PORT_ALERADY_CONNECTED:
        return 'Raspberry Pi Zero が接続されたままです。';
      default:
        return '原因不明のエラーです。';
    }
  }
}
