const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: "*"
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/chat', (req, res) => {
  const message = req.body.message;
  let response;

  // Implement your chat bot logic here
  if (message === 'hello') {
    response = 'Hi there!';
  } else if (message === 'how are you?') {
    response = "I'm doing well, thank you.";
  } else {
    response = "I'm sorry, I didn't understand that.";
  }

  res.json({ response: response });
});

app.listen(2000, () => {
  console.log('Server started on port 2000');
});
