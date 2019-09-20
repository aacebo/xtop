export class ElectronServiceStub {
  readonly window = {};

  get clipboard() {
    return {
      readText: () => 'test',
      readImage: () => ({ isEmpty: () => true }),
      readBookmark: () => {},
      readHTML: () => '',
      readRTF: () => '',
    };
  }

  get BrowserWindow() {
    return class BrowserWindow {
      webContents = {
        openDevTools: () => { return; },
      };

      loadURL(...args) {
        return args;
      }

      on(e: string, cb: (...args) => void) {
        cb(e);
      }
    };
  }

  copy() {}
  notification() {}
}
