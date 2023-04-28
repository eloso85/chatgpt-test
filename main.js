require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// async function fetchData(){
//     const response = await fetch('https://api.openai.com/v1/chat/completions');
// }