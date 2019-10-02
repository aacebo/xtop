import { Event, ipcMain } from 'electron';
import * as fs from 'fs';

export class Settings {
  private static readonly _path = 'xtop.settings.json';

  static get path() {
    return this._path;
  }

  static register() {
    ipcMain.on('settings.save', this._onSave.bind(this));
  }

  static unregister() {
    ipcMain.removeAllListeners('settings.save');
  }

  private static _onSave(_: Event, settings: any) {
    try {
      fs.writeFileSync(this.path, JSON.stringify(settings));
    } catch (err) {
      console.error(err);
    }
  }
}
