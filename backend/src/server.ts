import express from 'express';

import './database/connection';

const app = express();

app.get("/users", (request, response) =>{
  return response.json({message: "Hello Happy!" })
})
app.listen(3333);