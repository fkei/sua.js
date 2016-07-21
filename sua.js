/* Zepto v1.0-1-ga3cab6c - polyfill zepto detect event ajax form fx - zeptojs.com/license */
/**
 * @name simpleua.js
 * @author Kei Funagayama <kei.topaz@gmail.com>
 * @overview UserAgent decision for browser. fork zepto.js(http://zeptojs.com/)
 * @license MIT
 */

(function (global) {
    'use strict';

    /**
     * @name ua
     * @namespace ua
     */
    var ua = {VERSION: '0.9.9'};

    ua._resetKeys = ["ie", "webkit", "android", "android23", "android4", "android5", "ipad", "iphone", "webos", "touchpad", "kindle", "silk", "blackberry", "bb10", "rimtabletos", "playbook", "chrome", "firefox", "wii", "ds", "ps3", "psp", "psvita", "windowsphone", "safari", "trident", "xbox", "iphone5", "iphone3", "browser", "os", "mobile", "ios3", "ios4", "ios5", "ios6", "ios7", "ios8", "ios9", "edge", "webview"];

    ua.reset = function () {
        try {
            var target = this._resetKeys;
            for (var i = 0; i < target.length; i++) {
                if (this[target[i]]) {
                    delete this[target[i]];
                }
            }
        } catch (e) {
            // throw!!
        }
    };

    /**
     * UserAgent decision
     *
     * @memberof ua
     * @method
     * @param {String} useragent user agent
     */
    ua.setup = function (useragent) {
        if (!useragent && global && global.navigator && global.navigator.userAgent) {
            // set browser user agent
            useragent = global.navigator.userAgent;
        }
        if (!useragent) {
            throw new Error('useragent setup error. useragent not found.');
        }

        this.reset();

        /**
         * Decision: ie
         * @name ie
         * @memberof ua
         * @return {Boolean}
         */
        this.ie = !!(useragent.indexOf('MSIE') >= 0 || useragent.indexOf('Trident') >= 0 || useragent.indexOf('Edge') >= 0),

        /**
         * Decision: webkit
         * @name webkit
         * @memberof ua
         * @return {Array}
         */
        this.webkit = useragent.match(/WebKit\/([\d.]+)/),
        /**
         * Decision: android
         * @name android
         * @memberof ua
         * @return {Array}
         */
        this.android = useragent.match(/(Android)\s+([\d.]+)/),
        /**
         * Decision: android2.3
         * @name android
         * @memberof ua
         * @return {Array}
         */
        this.android23 = useragent.match(/(Android)\s+(2\.3)([\d.]+)/),
        /**
         * Decision: android4.x
         * @name android
         * @memberof ua
         * @return {Array}
         */
        this.android4 = useragent.match(/(Android)\s+(4)([\d.]+)/),
        /**
         * Decision: android4.x
         * @name android
         * @memberof ua
         * @return {Array}
         */
        this.android5 = useragent.match(/(Android)\s+(5)([\d.]+)/),
        /**
         * Decision: ipad
         * @name ipad
         * @memberof ua
         * @return {Array}
         */
        this.ipad = useragent.match(/(iPad).*OS\s([\d_]+)/),
        /**
         * Decision: iphone
         * @name iphone
         * @memberof ua
         * @return {Array}
         */
        this.iphone = !this.ipad && useragent.match(/(iPhone\sOS)\s([\d_]+)/),

        /**
         * Decision: webos
         * @name webos
         * @memberof ua
         * @return {Array}
         */
        this.webos = useragent.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        /**
         * Decision: touchpad
         * @name touchpad
         * @memberof ua
         * @return {Array}
         */
        this.touchpad = this.webos && useragent.match(/TouchPad/),
        /**
         * Decision: kindle
         * @name kindle
         * @memberof ua
         * @return {Array}
         */
        //this.kindle = useragent.match(/Kindle\/([\d.]+)/),
        this.kindle = useragent.match(/(Kindle)/),
        /**
         * Decision: silk
         * @name silk
         * @memberof ua
         * @return {Array}
         */
        //this.silk = useragent.match(/Silk\/([\d._]+)/),
        this.silk = useragent.match(/(Silk)/),

        /**
         * Decision: blackberry
         * @name blackberry
         * @memberof ua
         * @return {Array}
         */
        //this.blackberry = useragent.match(/(BlackBerry).*Version\/([\d.]+)/),
        this.blackberry = useragent.match(/(BlackBerry).*/),

        /**
         * Decision: bb10
         * @name bb10
         * @memberof ua
         * @return {Array}
         */
        this.bb10 = useragent.match(/(BB10).*Version\/([\d.]+)/),
        /**
         * Decision: rimtabletos
         * @name rimtabletos
         * @memberof ua
         * @return {Array}
         */
        this.rimtabletos = useragent.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
        /**
         * Decision: playbook
         * @name playbook
         * @memberof ua
         * @return {Array}
         */
        this.playbook = useragent.match(/PlayBook/),
        /**
         * Decision: chrome
         * @name chrome
         * @memberof ua
         * @return {Array}
         */
        this.chrome = useragent.match(/Chrome\/([\d.]+)/) || useragent.match(/CriOS\/([\d.]+)/),
        /**
         * Decision: firefox
         * @name firefox
         * @memberof ua
         * @return {Array}
         */
        this.firefox = useragent.match(/Firefox\/([\d.]+)/),
        /**
         * Decision: wii
         * @name wii
         * @memberof ua
         * @return {Array}
         */
        this.wii = useragent.match(/Nintendo (Wii);/),
        /**
         * Decision: ds
         * @name ds
         * @memberof ua
         * @return {Array}
         */
        this.ds = useragent.match(/Nintendo (DS|3DS|DSi);/),
        /**
         * Decision: ps3
         * @name ps3
         * @memberof ua
         * @return {Array}
         */
        this.ps3 = useragent.match(/PLAYSTATION 3/),
        /**
         * Decision: psp
         * @name psp
         * @memberof ua
         * @return {Array}
         */
        this.psp = useragent.match(/(PlayStation Portable)/),
        /**
         * Decision: psvita
         * @name psvita
         * @memberof ua
         * @return {Array}
         */
        this.psvita = useragent.match(/(PlayStation Vita)/),
        /**
         * Decision: Windows Phone
         * @name windowsphone
         * @memberof ua
         * @return {Array}
         */
        this.windowsphone = useragent.match(/(Windows Phone |Windows Phone OS )([\d.]+)/),
        /**
         * Decision: safari
         * @name safari
         * @memberof ua
         * @return {Array}
         */
        this.safari = useragent.match(/(Version)\/([0-9\.]+).*Safari\/([0-9\.]+)/),
        /**
         * Decision: trident
         * @name trident
         * @memberof ua
         * @return {Array}
         */
        this.trident = useragent.match(/Trident\/([\d\.]+)/),
        /**
         * Decision: xbox
         * @name xbox
         * @memberof ua
         * @return {Array}
         */
        this.xbox = useragent.match(/Xbox/),

        /**
         * Decision: iphone5
         * ToDo: need to check the evaluation method again after the release of iPhone5S(and later version)
         * @name iphone5
         * @memberof ua
         * @return {boolean}
         */
        this.iphone5 = !(typeof module !== 'undefined' && module.exports) && this.iphone && screen && screen.width === 320 && screen.height === 568;


        /**
         * Decision: iphone3
         * @name iphone3
         * @memberof ua
         * @return {boolean}
         */
        this.iphone3 = this.iphone && global.devicePixelRatio === 1 ? true : false;


        /**
         * browser information
         * @name browser
         * @memberof ua
         * @return {Object}
         */
        this.browser = {
            locale: undefined, // ja-JP, en-us
            lang: undefined, // ja, en ....
            country: undefined // JP, us ...
        };

        /**
         * os infomation
         * @name os
         * @memberof ua
         * @return {Object}
         */
        this.os = {};

        if (this.webkit && !this.ie) {
            this.browser.webkit = true;
            this.browser.version = this.webkit[1];
        }

        if (this.trident) {
            this.browser.trident = true;
            this.browser.version = this.trident[1];
        }

        if (this.android) {
            this.os.android = true;
            this.os.version = this.android[2];
            try {
                this.browser.locale = useragent.match(/(Android)\s(.+);\s([^;]+);/)[3];
                this.browser.lang = this.browser.locale.substring(0, 2);
                this.browser.country = this.browser.locale.substring(3);
            } catch (e) {
                //console.log('Failed to parse user agent string of Android.', useragent);
            }
        }
        if (this.iphone) {
            this.os.ios = this.os.iphone = true;
            this.os.version = this.iphone[2].replace(/_/g, '.');
        }

        if (this.ipad) {
            this.os.ios = this.os.ipad = true;
            this.os.version = this.ipad[2].replace(/_/g, '.');
        }

        if (this.os.ios) {
          var __ios_v_0 = null;
          if (this.os.version) {
              __ios_v_0 = this.os.version.substring(0, 1);
          }
          for (var i = 3; i < 10; i++) { // IOS 3->9
              /**
               * Decision: ios 3-9
               * @name ios3-9
               * @memberof ua
               * @return {boolean}
               */
              this['ios' + i] = __ios_v_0 === "" + i;
          }
        }

        if (this.webos) {
            this.os.webos = true;
            this.os.version = this.webos[2];
        }
        if (this.touchpad) {
            this.os.touchpad = true;
        }
        if (this.blackberry) {
            this.os.blackberry = true;
        }
        if (this.bb10) {
            this.os.bb10 = true;
            this.os.version = this.bb10[2];
        }
        if (this.rimtabletos) {
            this.os.rimtabletos = true;
            this.os.version = this.rimtabletos[2];
        }
        if (this.playbook) {
            this.browser.playbook = true;
        }
        if (this.kindle) {
            this.os.kindle = true;
        }
        if (this.silk) {
            this.browser.silk = true;
        }
        if (!this.silk && this.os.android && useragent.match(/Kindle Fire/)) {
            this.browser.silk = true;
        }
        if (this.chrome && !this.ie) {
            this.browser.chrome = true;
            this.browser.version = this.chrome[1];
        }
        if (this.firefox) {
            this.browser.firefox = true;
            this.browser.version = this.firefox[1];
            if (useragent.match(/Android/)) { // firefox on android
              this.android = ["Android", "Android", ""];
            }
        }
        if (this.wii || this.ds) {
            this.os.nintendo = true;
        }
        if (this.windowsphone) {
            this.browser.windowsphone = true;
            this.browser.version = this.windowsphone[2];
        }
        if (this.safari) {
            this.browser.safari = true;
            this.browser.version = this.safari[2];
        }

        if (this.ie) {
            this.browser.ie = /(MSIE|rv:?)\s?([\d\.]+)/.exec(useragent);
            this.edge = false;

            if (!this.browser.ie) { // Edge
                this.browser.ie = /(Edge\/)(\d.+)/.exec(useragent);
                this.browser.version = this.browser.ie[2];
                this.edge = true;
                // reset
                this.chrome = false;
                this.webkit = false;

            } else if (!this.windowsphone) {
                this.browser.version = (this.browser.ie) ? this.browser.ie[2] : '';
            }

            if (0 < this.browser.version.indexOf('.')) {
                this.browser.majorversion = this.browser.version.substring(0, this.browser.version.indexOf('.'));
            } else {
                this.browser.majorversion = this.browser.version;
            }
        }


        /**
         * Decision: table
         * @name table
         * @memberof ua
         * @return {boolean}
         */
        this.os.tablet = !!(this.ipad || this.kindle || this.playbook || (this.android && !useragent.match(/Mobile/)) || (this.firefox && useragent.match(/Tablet/)));

        /**
         * Decision: phone
         * @name phone
         * @memberof ua
         * @return {boolean}
         */
        this.os.phone = !!(!this.os.tablet && (this.android || this.iphone || this.webos || this.blackberry || this.bb10 ||
                                                (this.chrome && useragent.match(/Android/)) || (this.chrome && useragent.match(/CriOS\/([\d.]+)/)) || (this.firefox && useragent.match(/Mobile/)) || (this.windowsphone && useragent.match(/IEMobile/))));

        /**
         * Decision mobile (tablet or phone)
         * @type {boolean}
         */
        this.mobile = !!(this.os.tablet|| this.os.phone);

        this.webview = {};
        /**
         * Decision: TwitterWebView
         * @name twitterwebview
         * @memberof ua
         * @return {boolean}
         */
        if (useragent.match(/Twitter/)) {
            this.webview.twitter = true;
        }
    };

    if (typeof module !== 'undefined' && module.exports) {
      // node
        module.exports = ua;
    }

    if (!global.sua) {
      // browser
      global.sua = {};
      global.sua = ua;
    }

})(this);
