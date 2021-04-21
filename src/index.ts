import express, { Application } from 'express';

const app:Application = express();

const port = 2000;

app.listen(port, () => {
  console.log(`listening on https:/localhost:${port}`);
});
