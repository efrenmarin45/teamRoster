const express = require("express")()
require("dotenv").config()
const p = process.env

express.get("/", (request, response) => {
  response.send("hello")
})

express.listen(p.PORT, () =>
  console.log(`Express Server Running on port ${p.PORT}`)
)
