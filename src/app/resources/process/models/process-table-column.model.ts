import { TableColumn } from '@swimlane/ngx-datatable';

export interface IProcessTableColumn extends TableColumn {
  readonly index: number;
  readonly filterable?: boolean;
  readonly visible?: boolean;
}
