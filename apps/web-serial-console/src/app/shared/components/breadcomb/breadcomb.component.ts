import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-breadcomb',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './breadcomb.component.html',
  styleUrl: './breadcomb.component.scss',
})
export class BreadcombComponent {}
