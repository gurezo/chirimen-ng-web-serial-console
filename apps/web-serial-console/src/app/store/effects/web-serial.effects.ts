import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { from, map, switchMap } from 'rxjs';
import {
  WEB_SERIAL_ERROR_PORT_ALERADY_CONNECTED,
  WEB_SERIAL_ERROR_PORT_NO_SELECTED,
  WEB_SERIAL_IS_NOT_RASPBEYY_PI_ZERO,
  WEB_SERIAL_OPEN_SUCCESS,
} from '../../constants';
import { WebSerialService } from '../../service';
import { WebSerialActions } from '../actions/web-serial.actions';

@Injectable()
export class WebSerialEffects {
  actions$ = inject(Actions);
  service = inject(WebSerialService);
  toastr = inject(ToastrService);

  init$ = createEffect(
    () => this.actions$.pipe(ofType(WebSerialActions.init)),
    { dispatch: false },
  );

  connect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WebSerialActions.onConnect),
      switchMap(() =>
        from(this.service.connect()).pipe(
          map((connectedResult) => {
            if (connectedResult === WEB_SERIAL_OPEN_SUCCESS) {
              this.toastr.success(
                '接続されたデバイスは Raspberry Pi Zero です。',
                'Web Serial Open Success',
              );
              return WebSerialActions.onConnectSuccess({ isConnected: true });
            } else {
              const errorMessage = this.createErrorMessages(connectedResult);
              this.toastr.error(errorMessage, 'Web Serial Open Fail');
              return WebSerialActions.onConnectFail({ isConnected: false });
            }
          }),
        ),
      ),
    ),
  );

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

  disConnect$ = createEffect(
    () => this.actions$.pipe(ofType(WebSerialActions.onDisConnect)),
    { dispatch: false },
  );
}
