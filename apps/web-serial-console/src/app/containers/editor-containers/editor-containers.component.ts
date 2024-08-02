import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { ButtonComponent } from '../../shared';
import { MonacoEditorService } from './services';

@Component({
  selector: 'app-editor-containers',
  standalone: true,
  imports: [FormsModule, MonacoEditorModule, ButtonComponent],
  templateUrl: './editor-containers.component.html',
  styleUrl: './editor-containers.component.scss',
  providers: [MonacoEditorService],
})
export class EditorContainersComponent implements OnInit {
  private monaca = inject(MonacoEditorService);
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';

  ngOnInit(): void {
    // let line = editor.getPosition();
    // console.log(line);
  }

  loadFile(): void {}
  save(): void {}
  create(): void {}
  delete(): void {}
  rename(): void {}
}
