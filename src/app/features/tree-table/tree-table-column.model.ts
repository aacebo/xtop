export interface ITreeTableColumn {
  readonly label: string;
  readonly sortable?: boolean;
  readonly direction?: 'ASC' | 'DESC';
}
