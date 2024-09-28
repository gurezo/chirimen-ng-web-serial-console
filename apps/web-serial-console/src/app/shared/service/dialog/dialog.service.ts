import { Dialog } from '@angular/cdk/dialog';
import { inject, Injectable } from '@angular/core';
import { PinAssignContainersComponent } from '../../../containers';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialog = inject(Dialog);

  openPinAssignDialog() {
    this.dialog.open(PinAssignContainersComponent, {
      height: '400px',
      width: '600px',
      panelClass: 'my-dialog',
    });
  }
}
