const express = require('express');
// eslint-disable-next-line no-unused-vars
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const serveStatic = require('serve-static');

// eslint-disable-next-line no-undef
app = express();
app.use(serveStatic(`${__dirname}/dist`)); const port = process.env.PORT || 5000;
app.listen(port); console.log(`server started ${port}`);
