import { Component } from '@angular/core';
import { EditorContainersComponent } from '../../containers';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [EditorContainersComponent],
  template: `<app-editor-containers />`,
})
export default class EditorComponent {}
