export interface IProcessTableAction {
  readonly name: string;
  readonly key: string;
  readonly ctrl?: boolean;
  readonly condition?: () => boolean;
  readonly cb: () => void;
}
