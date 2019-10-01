import { ProcessStateCode } from '../enums';

export const PROCESS_STATE_CODE: { [state in ProcessStateCode]: string } = {
  [ProcessStateCode.UninterruptibleSleep]: 'Sleeping (Uninterruptible)',
  [ProcessStateCode.Running]: 'Running',
  [ProcessStateCode.InterruptibleSleep]: 'Sleeping (Interruptible)',
  [ProcessStateCode.Stopped]: 'Stopped',
  [ProcessStateCode.Paging]: 'Paging',
  [ProcessStateCode.Dead]: 'Dead',
  [ProcessStateCode.Zombie]: 'Zombie',
  [ProcessStateCode.Idle]: 'Idle',
};
