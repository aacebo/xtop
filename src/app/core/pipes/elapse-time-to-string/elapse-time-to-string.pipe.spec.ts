import { ElapseTimeToStringPipe } from './elapse-time-to-string.pipe';

describe('ElapseTimeToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ElapseTimeToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
