import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, map, switchMap } from 'rxjs';
import { WEB_SERIAL_OPEN_SUCCESS } from '../../constants';
import { WebSerialService } from '../../service';
import { WebSerialActions } from '../actions/web-serial.actions';

@Injectable()
export class WebSerialEffects {
  actions$ = inject(Actions);
  service = inject(WebSerialService);

  init$ = createEffect(
    () => this.actions$.pipe(ofType(WebSerialActions.init)),
    { dispatch: false },
  );

  connect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WebSerialActions.onConnect),
      switchMap(() =>
        from(this.service.connect()).pipe(
          map((isConnected) =>
            isConnected === WEB_SERIAL_OPEN_SUCCESS
              ? WebSerialActions.onConnectSuccess({ isConnected: true })
              : WebSerialActions.onConnectFail({ isConnected: false }),
          ),
        ),
      ),
    ),
  );

  disConnect$ = createEffect(
    () => this.actions$.pipe(ofType(WebSerialActions.onDisConnect)),
    { dispatch: false },
  );
}
