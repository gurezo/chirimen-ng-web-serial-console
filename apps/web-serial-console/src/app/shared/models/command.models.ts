const distro = 'linux-armv6l';
const nodeVersion = 'v22.9.0';
const chirimenDirectory = 'chirimenSetup';

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
  forever: 'sudo npm install -g forever',
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
