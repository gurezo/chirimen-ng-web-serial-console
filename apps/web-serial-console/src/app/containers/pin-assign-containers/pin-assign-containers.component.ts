import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent, ExampleFrameComponent } from '../../shared';

const Mode = {
  SETUP: 'setup',
  i2cDetect: 'i2c',
  RESIDENT: 'resident',
  EXAMPLE: 'example',
};
type Mode = (typeof Mode)[keyof typeof Mode];

@Component({
  selector: 'app-pin-assign-containers',
  standalone: true,
  imports: [ButtonComponent, ExampleFrameComponent, RouterLink],
  templateUrl: './pin-assign-containers.component.html',
  styleUrl: './pin-assign-containers.component.scss',
})
export class PinAssignContainersComponent {
  pageMode = Mode;
  mode: string = Mode.SETUP;

  setUpChirimen() {
    this.mode = this.pageMode.SETUP;
  }
  i2cDetect() {
    this.mode = this.pageMode.i2cDetect;
  }
  getExample() {
    this.mode = this.pageMode.EXAMPLE;
  }
  residentAppConf() {
    this.mode = this.pageMode.RESIDENT;
  }
}
