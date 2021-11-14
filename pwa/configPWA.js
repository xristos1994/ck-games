// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

fs.copyFile('./pwa/assetlinks.json', './public/assetlinks.json', (err) => {
  if (err) {
    throw err;
  }
  console.log('assetlinks.json was added to public');
});