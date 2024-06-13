import express from 'express';
import AppConfig from './config/app.config'

const app = express();

const port = AppConfig.server.port || "3000";

app.get('/', (req, res) => {
  res.send('Hello, TypeScript + Node.js + Express!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});