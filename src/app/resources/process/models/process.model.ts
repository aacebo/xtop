import { ProcessDescriptor } from 'ps-list';

export interface IProcess extends ProcessDescriptor {
  readonly children: ProcessDescriptor[];
}
