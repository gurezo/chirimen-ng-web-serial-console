import { Component } from '@angular/core';
import { WifiSettingContainersComponent } from '../../containers';

@Component({
  selector: 'app-wifi-setting',
  standalone: true,
  imports: [WifiSettingContainersComponent],
  template: `<app-wifi-setting />`,
})
export default class WifiSettingComponent {}
