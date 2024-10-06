import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WiFiInformation } from '../../models';

@Component({
  selector: 'app-wifi-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wifi-info.component.html',
  styleUrl: './wifi-info.component.scss',
})
export class WifiInfoComponent {
  @Input() wifiIfo!: WiFiInformation;
}
