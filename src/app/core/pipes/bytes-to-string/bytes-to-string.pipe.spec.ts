import { BytesToStringPipe } from './bytes-to-string.pipe';

describe('BytesToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new BytesToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
