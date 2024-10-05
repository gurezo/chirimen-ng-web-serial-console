import { Dialog } from '@angular/cdk/dialog';
import { inject, Injectable } from '@angular/core';
import { PinAssignComponent } from '../../components';
import {
  ChirimenSetupComponent,
  FileUploadComponent,
  I2cdetectComponent,
} from '../../dialog';

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

  openI2CDetectDialog() {
    this.dialog.open(I2cdetectComponent, {
      height: '320px',
      width: '420px',
      panelClass: 'my-dialog',
    });
  }

  openSetupChirimenDialog() {
    this.dialog.open(ChirimenSetupComponent, {
      height: '320px',
      width: '420px',
      panelClass: 'my-dialog',
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
