# hid-listen-cli
> Prints out debugging information from usb hid devices

[![Build Status](https://travis-ci.org/zvecr/hid-listen-cli.svg?branch=master)](https://travis-ci.org/zvecr/hid-listen-cli)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/842bbfe00be74720afd7c6899652367c)](https://www.codacy.com/app/zvecr/hid-listen-cli?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=zvecr/hid-listen-cli&amp;utm_campaign=Badge_Grade)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=zvecr/hid-listen-cli)](https://dependabot.com)

NodeJS implementation of <https://www.pjrc.com/teensy/hid_listen.html>.

## Install

```
$ npm install -g hid-listen-cli
```

## Usage

```shell
hid_listen --help
Print out debugging information from usb hid devices.

USAGE
  $ hid-listen-cli

OPTIONS
  -h, --help     show CLI help
  -v, --version  show CLI version

DESCRIPTION
  ...
  A simple and easy way to get basic usb hid device debug messages.
  HID Listen automatically finds your device without operating system assigned port names or settings.


```

### Example output
```shell
$ hid_listen
Waiting for device:
....Listening:
Device disconnected.
Waiting for new device:
....Listening:
r/c 01234567
00: 01000000
01: 00000000
r/c 01234567
00: 00000000
01: 00000000
r/c 01234567
00: 01000000
01: 00000000
r/c 01234567
00: 00000000
01: 00000000
```
