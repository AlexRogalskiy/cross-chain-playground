// Netlify can't build usb package :/
// and we don't need it for the web build

if (process.env.NETLIFY) {
  console.log('Removing usb & node-hid modules from package-lock.json')

  const lock = require('./package-lock.json')

  delete lock.dependencies['usb']
  delete lock.dependencies['node-hid']
  delete lock.dependencies['@ledgerhq/hw-transport-node-hid'].requires['usb']
  delete lock.dependencies['@ledgerhq/hw-transport-node-hid'].requires['node-hid']
  delete lock.dependencies['@ledgerhq/hw-transport-node-hid-noevents'].requires['node-hid']

  require('fs').writeFileSync('./package-lock.json', JSON.stringify(lock, null, 2), 'utf8')
}
