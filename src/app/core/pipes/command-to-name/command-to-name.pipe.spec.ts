import { CommandToNamePipe } from './command-to-name.pipe';

describe('CommandToNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CommandToNamePipe();
    expect(pipe).toBeTruthy();
  });
});
