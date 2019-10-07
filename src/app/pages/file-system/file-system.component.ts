import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PageTemplate } from '../../core/templates';
import { ElectronService } from '../../core/services';
import { FileSystemService, IFileSystemSize } from '../../resources/file-system';

@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileSystemComponent extends PageTemplate {
  constructor(
    readonly router: Router,
    readonly electron: ElectronService,
    readonly fileSystem: FileSystemService,
  ) { super(router, electron); }

  onSubscription(fs: IFileSystemSize[]) {
    this.fileSystem.add(fs);
  }
}
