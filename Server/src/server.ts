import express from 'express';

const app = express();
const port: number = 3000;

app.get('/', (req, res) => {
  res.send('We in this bitch!');
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
