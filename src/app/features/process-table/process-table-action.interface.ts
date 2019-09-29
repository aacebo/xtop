export interface IProcessTableAction {
  readonly name: string;
  readonly key: string;
  readonly ctrl?: boolean;
  readonly cb: () => void;
}
