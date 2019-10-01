import { TableColumn } from '@swimlane/ngx-datatable';

export interface IProcessTableColumn extends TableColumn {
  readonly filterable?: boolean;
}
