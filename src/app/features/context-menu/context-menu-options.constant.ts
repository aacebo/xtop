import { InjectionToken } from '@angular/core';

import { IContextMenuOption } from './context-menu-option.interface';

export const CONTEXT_MENU_OPTIONS = new InjectionToken<IContextMenuOption[]>('CONTEXT_MENU_OPTIONS');
