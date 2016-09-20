# sua

Simple user agent detection library. (Node.js or Browser supported)

# Install (NPM or Bower)

```
$ npm install sua.js
or
$ bower install sua.js
```

# Feature

Support Browser

- [x] ua.Android 2.1
- [x] ua.Android 2.2
- [x] ua.Android 2.3
- [x] ua.Android 3.x
- [x] ua.Android 4.x
- [x] ua.Android 5.0
- [x] ua.Android 5.1
- [x] ua.Android 6.x
- [x] ua.iphone (IOS4)
- [x] ua.iphone (IOS5)
- [x] ua.iphone (IOS6)
- [x] ua.iphone (IOS7)
- [x] ua.iphone (IOS8)
- [x] ua.iphone (IOS9)
- [x] ua.iphone (IOS4-ipad)
- [x] ua.iphone (IOS5-ipad)
- [x] ua.iphone (IOS6-ipad)
- [x] ua.iphone (IOS7-ipad)
- [x] ua.iphone (IOS8-ipad)
- [x] ua.iphone (IOS9-ipad)
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

# Build

```sh
$ make build # output: sua.min.js
```

# test

```
Browser : $ ./spec/index.html

Terminal : $ make test
```

# Use

```
<script src="sua.js" />

<script>
  var sua = new SUA('Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25');

  console.log(sua.browser.version);

  JSON.stringify(sua.os, null, "    ");
  > "{
  >   "iphone": true,
  >   "ios": true,
  >   "version": "6.0",
  >   "tablet": false,
  >   "phone": true
  > }"

  JSON.stringify(sua.iphone, null, "    ")
  > "[
  >   "iPhone OS 6_0",
  >   "iPhone OS",
  >   "6_0"
  > ]"
</script>
```

# file size

```
sua.js (size: 12,935 byte) optimize none
sua.min.js (size: 4,497 byte) optimize uglify2
```

## LICENSE

@see : [LICENSE](https://github.com/fkei/sua.js/blob/master/LICENSE)
