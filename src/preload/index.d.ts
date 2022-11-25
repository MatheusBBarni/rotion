// prettier-ignore
import { ElectronAPI } from '@electron-toolkit/preload'

// prettier-ignore
declare global {
  // prettier-ignore
  export interface Window {
    electron: ElectronAPI
    api: unknown
  }
}
