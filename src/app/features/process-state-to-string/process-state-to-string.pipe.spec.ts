import { ProcessStateToStringPipe } from './process-state-to-string.pipe';

describe('ProcessStateToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ProcessStateToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
