export enum BasicStatus {
  DISABLE,
  ENABLE,
}

export enum ResultEnum {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 401,
}

export enum StorageEnum {
  User = 'user',
  Token = 'token',
  Settings = 'settings',
  I18N = 'i18nextLng',
}

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

export enum ThemeLayout {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
  Mini = 'mini',
}

export enum ThemeColorPresets {
  Purple = 'purple',
}

export enum LocalEnum {
  en_US = 'en_US',
  ru_RU = 'ru_RU',
}

export enum MultiTabOperation {
  FULLSCREEN = 'fullscreen',
  REFRESH = 'refresh',
  CLOSE = 'close',
  CLOSEOTHERS = 'closeOthers',
  CLOSEALL = 'closeAll',
  CLOSELEFT = 'closeLeft',
  CLOSERIGHT = 'closeRight',
}

export enum PermissionType {
  CATALOGUE,
  MENU,
  BUTTON,
}
