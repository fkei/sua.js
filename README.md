# sua

Simple user agent detection library.

# Install (NPM or Bower)

```
$ npm install sua
or
$ bower install sua.js
```

# Build

```sh
$ make build # output: sua.min.js
```

# test

```
Browser : $ ./spec/index.html

Terminal : $ ./node_modules/mocha/bin/mocha tests/basic.js
```

# Use

```js
<script src="sua.js" />

<script>
  // window.sua.setup();
  window.sua.setup('Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25');

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
sua.js (size: 10721 byte) optimize none
sua.min.js (size: 3559 byte) optimize uglify2
```

## LICENSE

@see : [LICENSE](https://github.com/fkei/sua.js/blob/master/LICENSE)
