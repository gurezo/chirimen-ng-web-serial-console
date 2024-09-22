export const PageType = {
  console: 'console',
  editor: 'editor',
  wifiSetting: 'wifi-setting',
  pinAssign: 'pin-assign',
} as const;

export type PageType = (typeof PageType)[keyof typeof PageType];
