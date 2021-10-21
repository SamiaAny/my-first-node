//import korte hobe
const express = require('express');
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;

app.get('/',(req, res) => {
    res.send('welcome to my first node project');
});

app.listen(port, () => {
    console.log('listen to port',port);
})