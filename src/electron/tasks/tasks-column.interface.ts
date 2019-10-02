export interface ITasksColumn {
  readonly key: string;
  readonly label?: string;
  readonly mac?: boolean;
  readonly formatter?: (...args) => any;
}
