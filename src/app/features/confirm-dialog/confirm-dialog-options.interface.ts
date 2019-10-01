import { ThemePalette } from '@angular/material';

export interface IConfirmDialogOptions {
  readonly title: string;
  readonly content: string;
  readonly buttons?: {
    readonly primary?: {
      readonly text?: string;
      readonly color?: ThemePalette;
    },
    readonly secondary?: {
      readonly text?: string;
      readonly color?: ThemePalette;
    };
  };
}
