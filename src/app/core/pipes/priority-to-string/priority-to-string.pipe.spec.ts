import { PriorityToStringPipe } from './priority-to-string.pipe';

describe('PriorityToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new PriorityToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
