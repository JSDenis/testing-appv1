const express = require('express');
const app = express();
const port = 3000;

app.get('/datalab6', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send('Lab 6 data.');
});

if (require.main === module) {
    app.listen(port, () => { console.log(`Server is running on http://localhost:${port}`); });
}

module.exports = app; 