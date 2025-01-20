const fs = require('fs');
const path = require('path');

const pathTo1 = path.join(__dirname, 'files');
const pathTo2 = path.join(__dirname, 'files-copy');

function copy() {
  fs.mkdir(pathTo2, { recursive: true }, () => {});
  fs.readdir(pathTo2, (error, files) => {
    files.forEach((file) => {
      const pathTo3 = path.join(pathTo2, file);
      fs.unlink(pathTo3 , () => {});
    });
  });
  fs.readdir(pathTo1, (error, files) => {
    files.forEach((file) => {
      const pathTo4 = path.join(pathTo1, file);
      const pathTo5 = `${pathTo2}/${file}`;
      fs.copyFile(pathTo4, pathTo5, () => {});
    });
  });
}
copy();
