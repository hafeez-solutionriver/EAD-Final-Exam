const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('register', (req, res) => {
app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
  })});

  