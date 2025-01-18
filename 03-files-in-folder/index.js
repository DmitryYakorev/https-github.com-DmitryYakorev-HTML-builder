const fs = require('fs');
const path = require('path');

const pathTo = path.join(__dirname, 'secret-folder');
fs.readdir(pathTo , { withFileTypes: true }, (err, files) => {
  files.forEach((file) => {
    if (file.isFile()) {
      const filePath = path.join(pathTo , file.name);
      const extension = path.extname(filePath).slice(1);
      const name = path.basename(filePath).replace(`.${extension}`, '');
      fs.stat(filePath, (err, value) => {
        console.log(`${name} - ${extension} - ${(+value.size / 1024).toFixed(5)} kb`);
      });
    }
  });
});
