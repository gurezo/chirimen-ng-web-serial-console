import { Dialog } from '@angular/cdk/dialog';
import { inject, Injectable } from '@angular/core';
import { PinAssignComponent } from '../../../dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialog = inject(Dialog);

  openPinAssignDialog() {
    this.dialog.open(PinAssignComponent, {
      height: '654px',
      width: '546px',
      panelClass: 'my-dialog',
    });
  }
}
