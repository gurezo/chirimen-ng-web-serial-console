import { Component, inject } from '@angular/core';
import { MonacoEditorService } from '@app/services';

@Component({
  selector: 'app-editor-containers',
  standalone: true,
  imports: [],
  templateUrl: './editor-containers.component.html',
  styleUrl: './editor-containers.component.scss',
  providers: [MonacoEditorService],
})
export class EditorContainersComponent {
  private monaca = inject(MonacoEditorService);

  loadFile(): void {}
  save(): void {}
  create(): void {}
  delete(): void {}
  rename(): void {}
}
