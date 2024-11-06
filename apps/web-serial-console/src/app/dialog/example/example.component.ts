import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components';
import { DialogService } from '../../service/dialog/dialog.service';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
})
export class ExampleComponent {
  private service = inject(DialogService);

  closeModal(): void {
    this.service.closeDialog();
  }
}
