const distro = 'linux-armv6l';
const nodeVersion = 'v22.9.0';
const chirimenDirectory = 'chirimenSetup';
const cronSettingText = 'chirimenCronSetting.txt';
const cronSettingLog = 'chirimenCronSetting.log';

export const UseCommand = {
  cd: 'cd ',
  wget: 'wget ',
} as const;
export type UseCommand = (typeof UseCommand)[keyof typeof UseCommand];

export const UseCommandNode = {
  distro: `DISTRO=${distro}`,
  get: `wget https://unofficial-builds.nodejs.org/download/release/${nodeVersion}/node-${nodeVersion}-${distro}.tar.xz`,
  showVersion: 'node -v',
  setVersion: `VERSION=${nodeVersion}`,
  mkDir: 'sudo mkdir -p /usr/local/lib/nodejs',
  xJvf: `sudo tar -xJvf node-${nodeVersion}-${distro}.tar.xz -C /usr/local/lib/nodejs`,
  pathSet: `echo -n -e "# Nodejs\nVERSION${nodeVersion}=\nDISTRO=${distro}\n\nexport PATH=/usr/local/lib/nodejs/node-${nodeVersion}-${distro}/bin:$PATH\n" | tee -a ~/.profile'`,
  golobalInstall: 'sudo npm install -g forever',
} as const;
export type UseCommandNode =
  (typeof UseCommandNode)[keyof typeof UseCommandNode];

export const UseCommandNpm = {
  showVersion: 'npm -v',
  install: 'npm install',
} as const;
export type UseCommandNpm = (typeof UseCommandNpm)[keyof typeof UseCommandNpm];

export const UseCommandChirmen = {
  mkDir: `mkdir ${chirimenDirectory}`,
  cd: `cd ${chirimenDirectory}`,
  getPackage:
    'wget -O package.json https://tutorial.chirimen.org/pizero/package.json',
  getRelayServer:
    'wget -O RelayServer.js https://chirimen.org/remote-connection/js/beta/RelayServer.js',
} as const;
export type UseCommandChirmen =
  (typeof UseCommandChirmen)[keyof typeof UseCommandChirmen];

export const UseCommandCamera = {
  config: 'sudo raspi-config nonint do_camera 0',
  configLegacy: 'sudo raspi-config nonint do_legacy 0',
} as const;
export type UseCommandCamera =
  (typeof UseCommandCamera)[keyof typeof UseCommandCamera];

export const UseCommandI2C = {
  detect: 'i2cdetect -y 1',
} as const;
export type UseCommandI2C = (typeof UseCommandI2C)[keyof typeof UseCommandI2C];

export const UseCommandCron = {
  remove: `rm ${cronSettingText}`,
  touch: `touch ${cronSettingText}`,
  regist: `crontab ./${cronSettingText}`,
  which: 'which forever',
  list: 'forever list --plain',
  start: 'forever start -w ', // ファイル名必須
  echo: 'echo -e "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n@reboot /usr/local/bin/forever start ', // ファイル名、アプリ名必須
  redirection: ` >> /tmp/${cronSettingLog} 2>&1" > ${cronSettingText}`,
} as const;
export type UseCommandCron =
  (typeof UseCommandCron)[keyof typeof UseCommandCron];
