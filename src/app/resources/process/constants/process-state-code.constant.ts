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
  [ProcessStateCode.HighPriority]: 'High Priority',
  [ProcessStateCode.LowPriority]: 'Low Priority',
  [ProcessStateCode.PagesLocked]: 'Pages Locked in Memory',
  [ProcessStateCode.SessionLeader]: 'Session Leader',
  [ProcessStateCode.MultiThreaded]: 'Multi-Threaded',
  [ProcessStateCode.Foreground]: 'In Foreground Process Group',
};
