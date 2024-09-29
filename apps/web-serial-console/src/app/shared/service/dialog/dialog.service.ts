import { Dialog } from '@angular/cdk/dialog';
import { inject, Injectable } from '@angular/core';
import { FileUploadComponent } from '../../../dialog';
import { PinAssignComponent } from '../../components';

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

  openFileUploadDialog() {
    this.dialog.open(FileUploadComponent, {
      height: '300px',
      width: '500px',
      panelClass: 'my-dialog',
    });
  }
}
