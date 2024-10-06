import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WifiInfoComponent } from '../../components/wifi-info/wifi-info.component';
import { dummyWiFiInformation } from '../../models';
import { DialogService } from '../../service/dialog/dialog.service';

@Component({
  selector: 'app-wifi-setting',
  standalone: true,
  imports: [WifiInfoComponent, NgFor],
  templateUrl: './wifi-setting.component.html',
  styleUrl: './wifi-setting.component.scss',
})
export class WifiSettingComponent {
  wifiInfoList = dummyWiFiInformation;
  private service = inject(DialogService);

  closeModal(): void {
    this.service.closeDialog();
  }
}
