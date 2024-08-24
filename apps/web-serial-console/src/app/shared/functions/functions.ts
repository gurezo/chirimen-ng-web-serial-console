const textFileExtensions = [
  '.txt',
  '.sh',
  '.csv',
  '.tsv',
  '.js',
  '.conf',
  '.mjs',
  '.md',
  '.yml',
  '.xml',
  '.html',
  '.htm',
  '.json',
  '.py',
  '.php',
];

function arrayBufferToBase64(buffer: number) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

function base64ToArrayBuffer(base64: string) {
  var binary_string = window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

function getOutputLines(str: string) {
  var lines = str.split('\n');
  var ans = [];
  for (var i = 0; i < lines.length; i++) {
    ans.push(lines[i].trim());
  }
  return ans;
}

function pad2(inp: string) {
  return ('0' + inp).slice(-2);
}

function str2arrayBuffer_old(str: string) {
  // textDecoder使わないタイプ・・
  return new Promise(function (callback) {
    // https://qiita.com/ukyo/items/1626defd020b2157e6bf
    var fr = new FileReader();
    fr.onloadend = function () {
      callback(fr.result);
    };
    fr.readAsArrayBuffer(new Blob([str]));
  });
}

function str2arrayBuffer(str: any) {
  return new TextEncoder().encode(str);
}

function arrayBuffer2str(buf: any) {
  return new TextDecoder('utf-8').decode(buf);
}
