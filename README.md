# ☕️ sua.js

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![Build Status](https://travis-ci.org/fkei/sua.js.svg?branch=master)](https://travis-ci.org/fkei/sua.js)
[![npm version](https://badge.fury.io/js/sua.js.svg)](https://badge.fury.io/js/sua.js)

A simple User-Agent string parser.

(Node.js or Browser supported)

## 🔰 Install

```bash
$ npm install sua.js
or
$ bower install sua.js
```

## 🎬 Quick Start

Browser

```html
<script src="sua.js" />

<script>
var sua = new SUA('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1');

if (!!sua.ios11) {
  // OK!!
}
</script>
```

NodeJS

```js
var SUA = require('sua.js');
var sua = new SUA('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1');
if (!!sua.ios11) {
  // OK!!
}
```

## ✨ Feature

Supported Browsers

- [x] ua.Android 2.1
- [x] ua.Android 2.2
- [x] ua.Android 2.3
- [x] ua.Android 3.x
- [x] ua.Android 4.x
- [x] ua.Android 5.0
- [x] ua.Android 5.1
- [x] ua.Android 6.x
- [x] ua.Android 7.0
- [x] ua.Android 7.1
- [x] ua.Android 8.0
- [x] ua.iphone (IOS4)
- [x] ua.iphone (IOS5)
- [x] ua.iphone (IOS6)
- [x] ua.iphone (IOS7)
- [x] ua.iphone (IOS8)
- [x] ua.iphone (IOS9)
- [x] ua.iphone (IOS10)
- [x] ua.iphone (IOS11)
- [x] ua.iphone (IOS12)
- [x] ua.iphone (IOS4-ipad)
- [x] ua.iphone (IOS5-ipad)
- [x] ua.iphone (IOS6-ipad)
- [x] ua.iphone (IOS7-ipad)
- [x] ua.iphone (IOS8-ipad)
- [x] ua.iphone (IOS9-ipad)
- [x] ua.iphone (IOS10-ipad)
- [x] ua.iphone (IOS11-ipad)
- [ ] ua.iphone (IOS12-ipad)
- [x] ua.iphone5 (hardware)
- [x] ua.blackberry
- [x] ua.webos
- [x] ua.touchpad
- [x] ua.kindle
- [x] ua.silk
- [x] ua.bb10
- [x] ua.rimtabletos
- [x] ua.playbook
- [x] ua.ds
- [x] ua.psp
- [x] ua.psvita
- [x] ua.windowsphone
- [x] ua.safari
- [x] ua.xbox
- [x] ua.ie11 Edge
- [x] ua.ie11
- [x] ua.ie10
- [x] ua.ie9
- [x] ua.android.firefox
- [x] ua.webview.twitter
- [x] ua.chrome pc
- [x] ua.firefox pc
- [x] ua.safari pc
- [x] ua.vivaldi
- [x] ua.wiiu (Wii U)
- [x] ua.nintendo_switch (Nintendo Switch)
- [x] ua.chromecast
- [x] ua.roku.ultra
- [x] ua.amazon.4k
- [x] ua.fire.tv
- [x] ua.google.nexus.player
- [x] ua.apple.tv
- [x] ua.playstation.3
- [x] ua.playstation.4

## 🗳 File size

```
sua.js (size: 14K)
sua.min.js (size: 5.2K) minified with uglify2
```

## 🏗 Build

```sh
$ npm run build # output: sua.min.js
```

## 🐛 Test

```
Browser : $ ./spec/index.html

Terminal : $ npm test
```

## 📄 License

@see : [LICENSE](https://github.com/fkei/sua.js/blob/master/LICENSE)
