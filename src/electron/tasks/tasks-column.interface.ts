export interface ITasksColumn {
  readonly key: string;
  readonly label?: string;
  readonly formatter?: (...args) => any;
}
