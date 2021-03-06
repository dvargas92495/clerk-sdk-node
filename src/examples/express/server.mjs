// Usage:
// node --require dotenv/config server.mjs

import express from 'express';
import { ClerkExpressMiddleware } from '@clerk/clerk-sdk-node';

const port = process.env.PORT;

function onError(error) {
  console.log(error.message);
}

var app = express();

app.use(ClerkExpressMiddleware({ onError }));

app.get('/', (req, res) => {
  res.json(req.session);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
