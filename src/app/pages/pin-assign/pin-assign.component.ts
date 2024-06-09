import { Component } from '@angular/core';
import { PinAssignContainersComponent } from '../../containers';

@Component({
  selector: 'app-pin-assign',
  standalone: true,
  imports: [PinAssignContainersComponent],
  template: `<app-pin-assign-containers />`,
})
export default class PinAssignComponent {}
