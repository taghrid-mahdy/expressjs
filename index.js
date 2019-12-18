const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`application is up on ${PORT}`));

// middelware 1
app.use((req, res, next) => {
  const data = 'Taghreed on the way';
  res.locals.taghreed = data;
  next();
})

// middelware 2
app.use((req, res, next) => {
  const data = 'abdulazeem on the way';
  res.locals.abdulazeem = data;
  const fakeData = { message: 'no data in fakeData' };
  // next(fakeData);
  next();
})

// handler
app.use('/', (req, res, next) => {
  res.json({
    message: `Server is up at root route! on port ${PORT}`,
    data: res.locals.taghreed,
    anotherData: res.locals.abdulazeem,
  });
})

// error handler
app.use((err, req, res, next) => {
  res.json({ error: err })
});