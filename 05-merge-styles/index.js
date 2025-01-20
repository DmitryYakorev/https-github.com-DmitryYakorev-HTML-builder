const fs = require('fs');
const path = require('path');

const pathTo1 = path.join(__dirname, 'project-dist', 'bundle.css');
const stream = fs.createWriteStream(pathTo1);

fs.readdir(
  path.join(__dirname, 'styles'),
  { withFileTypes: true },
  (error, files) => {
    files.forEach((file) => {
      if (file.isFile()) {
        const pathTo2 = path.join(__dirname, 'styles', file.name);
        const extension = path.extname(pathTo2).slice(1);
        if (extension === 'css') {
          const stream2 = fs.createReadStream(pathTo2);
          stream2.on('data', (elem) => stream.write(elem));
        }
      }
    });
  },
);
