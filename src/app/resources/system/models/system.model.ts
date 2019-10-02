export interface ISystem {
  readonly pid: number;
  readonly platform: NodeJS.Platform;
  readonly license: string;
  readonly version: string;
  readonly name: string;
  readonly description: string;
  readonly author: {
    readonly email: string;
    readonly name: string;
  };
}
