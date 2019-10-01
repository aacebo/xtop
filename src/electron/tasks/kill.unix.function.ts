import * as cp from 'child_process';
import * as util from 'util';

const exec = util.promisify(cp.exec);

export async function kill(pids: number[]) {
  for (const pid of pids) {
    await exec(`kill ${pid}`);
  }
}
