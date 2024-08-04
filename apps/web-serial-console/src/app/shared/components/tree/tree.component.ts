import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { FileInfo } from '../../models';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [MatTreeModule, MatIconModule],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
})
export class TreeComponent {
  @Input() treeControl!: FlatTreeControl<FileInfo>;
  @Input() dataSource!: FileInfo[];
  hasChild = (_: number, _nodeData: any) => _nodeData.expandable;
}
