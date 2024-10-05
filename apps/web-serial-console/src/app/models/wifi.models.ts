// For Example is this
// SSID : Buffalo-G-95F0
// address : 84:AF:EC:64:95:F1
// channel : 5
// frequency : 2.432 GHz (Channel 5)
// quality : Quality=21/70  Signal level=-89 dBm
// spec : IEEE 802.11i/WPA2 Version 1,TKIP,TKIP CCMPPSK

export interface WiFiInformation {
  SSID: string;
  address: string;
  channel: string;
  frequency: string;
  quality: string;
  spec: string;
}
