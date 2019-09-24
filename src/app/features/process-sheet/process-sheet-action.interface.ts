import { ThemePalette } from '@angular/material';

import { ProcessSheetAction } from './process-sheet-action.enum';

export interface IProcessSheetAction {
  readonly action: ProcessSheetAction;
  readonly icon: string;
  readonly text: string;
  readonly color?: ThemePalette;
}
