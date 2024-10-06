import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components';
import { DialogService } from '../../service/dialog/dialog.service';

@Component({
  selector: 'app-example-frame',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './example-frame.component.html',
  styleUrl: './example-frame.component.scss',
})
export class ExampleFrameComponent {
  private service = inject(DialogService);

  closeModal(): void {
    this.service.closeDialog();
  }
}
