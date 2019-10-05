const express = require('express');
const path = require('path');
const port = process.env.PORT || 4201;
const app = express();

app.use(express.static(__dirname + '../../../dist'));
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

app.listen(port);

console.log(`server started on port ${port}`);
console.log(`open the browser with http://localhost:${port}`);
