import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IFileSystemSize } from '../../resources/file-system';

@Component({
  selector: 'app-file-system-table',
  templateUrl: './file-system-table.component.html',
  styleUrls: ['./file-system-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileSystemTableComponent {
  @Input() fileSystems: IFileSystemSize[] = [];
}
