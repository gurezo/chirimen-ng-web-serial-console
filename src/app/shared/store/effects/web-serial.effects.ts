import { inject, Injectable } from '@angular/core';
import { WebSerialService } from '@app/shared/service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as WebSerialActions from '../actions/web-serial.actions';

@Injectable()
export class WebSerialEffects {
  actions$ = inject(Actions);
  service = inject(WebSerialService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WebSerialActions.initPort)
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
    )
  );
}
