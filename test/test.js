/* eslint-env mocha */
const { expect, test } = require('@oclif/test');
const mockery = require('mockery');
const EventEmitter = require('events');

const ee = new EventEmitter();
class DummyHID {
  constructor() {
    return ee;
  }
}

mockery.registerMock('hid-listen', DummyHID);

mockery.enable({
  warnOnUnregistered: false,
});

const cmd = require('..');

describe('hid_listen', () => {
  test
    .stdout()
    .do(() => cmd.run(['--version']))
    .catch('EEXIT: 0')
    .it('prints version', (ctx) => {
      expect(ctx.stdout).to.contain('hid-listen-cli/1.0.0');
    });

  test
    .stdout()
    .do(() => cmd.run(['--help']))
    .catch('EEXIT: 0')
    .it('prints help', (ctx) => {
      expect(ctx.stdout).to.contain('USAGE');
    });

  test
    .stdout()
    .do(() => cmd.run([]))
    .do(() => ee.emit('data', 'asdf'))
    .it('prints debug lines', (ctx) => {
      expect(ctx.stdout).to.contain('asdf');
    });

  test
    .stdout()
    .do(() => cmd.run([]))
    .do(() => ee.emit('connect'))
    .it('prints connection events', (ctx) => {
      expect(ctx.stdout).to.contain('Listening');
    });

  test
    .stdout()
    .do(() => cmd.run([]))
    .do(() => ee.emit('disconnect'))
    .it('prints disconnection events', (ctx) => {
      expect(ctx.stdout).to.contain('Device disconnected');
    });

  test
    .stdout()
    .do(() => cmd.run([]))
    .do(() => Array.from({ length: 5 }).forEach(() => ee.emit('tick')))
    .it('prints waiting for device indicators', (ctx) => {
      expect(ctx.stdout).to.contain('.....');
    });
});
