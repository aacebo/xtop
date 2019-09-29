import * as cp from 'child_process';
import * as util from 'util';

import { ITasksColumn } from './tasks-column.interface';

const exec = util.promisify(cp.exec);

export async function unix(cols: ITasksColumn[]) {
  let cmd = 'ps -A -o ';

  for (let i = 0; i < cols.length; i++) {
    cmd += `${cols[i].key}=${cols[i].label}`;

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
        map[cols[i].label] = isNaN(+args[i]) ? args[i] : +args[i];
      }

      data.push(map);
    }
  }

  return data;
}