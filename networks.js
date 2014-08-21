var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('dec13500'),//
  addressVersion: 45,//0x2d
  privKeyVersion: 173,//0x2d+0x80
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('C59A56EEA1B888DE258BD7E757E35040C21867AAE28776779B348D1F844AC201'),//
    merkle_root: hex('B84509B25957894608B2E115015F6C43DBDB5F0AA57376BBA0379378798220B1'),//
    height: 0,
    nonce: 12565946,//
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1398678972,//2014-04-28 09:56:12
    bits: 537919487,//
  },
  dnsSeeds: [
    'kuma.xau.jp',
    'kuma.mona-dns.info'
//    'kumaseed.sighash.info'
  ],
  defaultClientPort: 7586//
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
