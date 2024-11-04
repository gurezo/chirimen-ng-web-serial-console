import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { DialogService } from '../../service/dialog/dialog.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private dailogService = inject(DialogService);
  dialog = inject(Dialog);

  isSerialConnected = true;
  isNotSerialConnected = !this.isSerialConnected;

  openPinAssignDialog() {
    this.dailogService.openPinAssignDialog();
  }

  openWifiSettingDialog() {
    this.dailogService.openWifiSettingDialog();
  }
}
