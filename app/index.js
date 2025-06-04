const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Node.js app running in Docker!');
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`App listening on port ${PORT}`);
});
