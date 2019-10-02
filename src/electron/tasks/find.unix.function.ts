import * as cp from 'child_process';
import * as util from 'util';

import { ITasksColumn } from './tasks-column.interface';

const exec = util.promisify(cp.exec);

export async function find(cols: ITasksColumn[]) {
  let cmd = 'ps -A -o ';

  if (process.platform === 'darwin') {
    cols = cols.filter(c => c.mac !== false);
  }

  for (let i = 0; i < cols.length; i++) {
    cmd += `${cols[i].key}=${cols[i].label || cols[i].key}`;

    if (i < cols.length - 1) {
      cmd += ',';
    }
  }

  const { stderr, stdout } = await exec(`${cmd} | sed 's/  */ /g'`);

  if (stderr) {
    console.error(stderr);
    return;
  }

  const lines = stdout.split('\n');
  lines.shift();
  const data = [];

  for (const line of lines) {
    if (line) {
      const map: any = { };
      const args = line.trim().split(' ', cols.length);

      for (let i = 0; i < cols.length; i++) {
        const v = isNaN(+args[i]) ? args[i] : +args[i];
        map[cols[i].label] = cols[i].formatter ? cols[i].formatter(v) : v;
      }

      data.push(map);
    }
  }

  return data;
}
