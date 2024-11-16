import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, map, switchMap } from 'rxjs';
import { WEB_SERIAL_OPEN_SUCCESS } from '../../constants';
import { ToastMessageService, WebSerialService } from '../../service';
import { WebSerialActions } from '../actions/web-serial.actions';

@Injectable()
export class WebSerialEffects {
  actions$ = inject(Actions);
  service = inject(WebSerialService);
  toastMessage = inject(ToastMessageService);

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
              this.toastMessage.webSerailSuccess();
              return WebSerialActions.onConnectSuccess({ isConnected: true });
            } else {
              this.toastMessage.webSerailError(connectedResult);
              return WebSerialActions.onConnectFail({ isConnected: false });
            }
          }),
        ),
      ),
    ),
  );

  disConnect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(WebSerialActions.onDisConnect),
        switchMap(() => from(this.service.disConnect())),
      ),
    { dispatch: false },
  );
}
