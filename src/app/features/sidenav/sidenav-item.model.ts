import { Observable } from 'rxjs';

export interface ISidenavItem {
  readonly icon: string;
  readonly tooltip: string;
  readonly route: string | string[];
  readonly badge?: Observable<string | number>;
}
