import { Component } from '@angular/core';
import { ConsoleContainersComponent } from '../../containers';

@Component({
  selector: 'app-console',
  standalone: true,
  imports: [ConsoleContainersComponent],
  template: `<app-console-containers />`,
})
export default class ConsoleComponent {}
