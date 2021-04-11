import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World!');
  res.end();
}).listen(process.env.PORT);
