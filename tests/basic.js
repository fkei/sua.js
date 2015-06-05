(function (global) {
  describe('basic test', function() {
    it('Exist window.sua', function() {
      expect(sua).to.be.an('object');
    });
    it('setup', function() {
      sua.setup()
      expect(sua.browser.version).to.be.an('string');
    });
    it('setup parameter', function() {
      sua.setup('Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25')
      expect(sua.iphone[0]).to.be.an("string");
      expect(sua.iphone[0]).to.equal("iPhone OS 6_0");
      console.log(sua);
    });
  });
})(this);
