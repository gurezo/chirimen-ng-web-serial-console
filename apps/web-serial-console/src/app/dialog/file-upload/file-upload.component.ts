import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from '../../service/dialog/dialog.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
})
export class FileUploadComponent {
  private service = inject(DialogService);
  uploadForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      file: [null],
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadForm.patchValue({ file });
    }
  }

  onSubmit(): void {
    if (this.uploadForm.valid) {
      const file = this.uploadForm.get('file')?.value;
      console.log('Uploading file:', file);
      // アップロードロジックをここに追加
    }
  }

  closeModal(): void {
    this.service.closeDialog();
  }
}
