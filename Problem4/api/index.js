const express = require('express')
const app = express()
var cors = require('cors');
const port = 8088

app.use(cors());

app.get('/movies', (req, res) => {
  res.json({"movies":["Shawshink Redemption","Fight Club","300 Days of summer"]});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})