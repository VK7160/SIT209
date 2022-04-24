const express = require('express');
const helmet = require("helmet");
const app = express();
// This sets custom options for the `referrerPolicy` middleware.
app.use(
    helmet({
        contentSecurityPolicy: false,
        referrerPolicy: { policy: "no-referrer" },
    })
);

const port = 3050;

app.get('/', (req, res) => {
    res.send('Welcome to the Helmet server Ver-3.0');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

