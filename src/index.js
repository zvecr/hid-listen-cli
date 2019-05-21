const { Command, flags } = require('@oclif/command');
const HIDListen = require('hid-listen');

class HIDListenCli extends Command {
  async run() {
    // eslint-disable-next-line no-unused-vars
    const { flagz } = this.parse(HIDListenCli);

    console.log('Waiting for device:');
    const inst = new HIDListen();
    inst.on('tick', () => {
      process.stdout.write('.');
    });
    inst.on('connect', () => {
      console.log('Listening:');
    });
    inst.on('disconnect', () => {
      console.log('Device disconnected.');
      console.log('Waiting for new device:');
    });
    inst.on('data', (data) => {
      console.log(data);
    });
  }
}

HIDListenCli.description = `Print out debugging information from usb hid devices.
...
A simple and easy way to get basic usb hid device debug messages.
HID Listen automatically finds your device without operating system assigned port names or settings.
`;

HIDListenCli.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: 'v' }),
  // add --help flag to show CLI version
  help: flags.help({ char: 'h' }),
};

module.exports = HIDListenCli;
