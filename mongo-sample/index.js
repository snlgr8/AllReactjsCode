const express = require('express');
const { PORT } = require('./config/index');
const app = express();
const cors = require('cors');

const connectDb = require('./config/db');
const { saveAuthor, fetchAuthor } = require('./controller');

connectDb();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

//app.use('/api/v1/users', require('./routes/auth'));
app.get('/api/v1/author/save', async (req, res) => {
  await saveAuthor(req, res);
});

app.get('/api/v1/author', async (req, res) => {
  await fetchAuthor(req, res);
});
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
