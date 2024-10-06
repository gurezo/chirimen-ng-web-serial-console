import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { ButtonComponent, WifiInfoComponent } from '../../components';
import { dummyWiFiInformation } from '../../models';
import { DialogService } from '../../service/dialog/dialog.service';

@Component({
  selector: 'app-wifi-setting',
  standalone: true,
  imports: [
    ButtonComponent,
    WifiInfoComponent,
    MatDividerModule,
    NgFor,
    ReactiveFormsModule,
  ],
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
