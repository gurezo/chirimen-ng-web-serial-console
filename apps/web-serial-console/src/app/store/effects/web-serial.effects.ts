import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { WebSerialService } from '../../service';
import { WebSerialActions } from '../actions/web-serial.actions';

@Injectable()
export class WebSerialEffects {
  actions$ = inject(Actions);
  service = inject(WebSerialService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WebSerialActions.init),
      tap(() => console.log('init')),
      // TODO: ここでシリアルポートのリクエストを行う
      //  exhaustMap(() => from(this.service.requestPort()).pipe(
      //   map(() => of())
      // ))),
      // map(() => from(this.service.requestPort())),
      //  { dispatch: false },
      // switchMap(() => {
      //   return this.service.requestPort().then(
      //     () => {},
      //     error((error) => console.error(error))
      //   );
      // })
    ),
  );

  isConnect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WebSerialActions.isConnected),
      // TODO: ここでシリアルポートのリクエストを行う
      //  exhaustMap(() => from(this.service.requestPort()).pipe(
      //   map(() => of())
      // ))),
      // map(() => from(this.service.requestPort())),
      //  { dispatch: false },
      // switchMap(() => {
      //   return this.service.requestPort().then(
      //     () => {},
      //     error((error) => console.error(error))
      //   );
      // })
    ),
  );
}
