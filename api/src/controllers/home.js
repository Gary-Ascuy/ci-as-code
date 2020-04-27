import express from 'express'

export const home = express.Router()
export const html = `
<!DOCTYPE html>
<html>
<title>CI as Code - API</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<style>
  body,h1 { font-family: "Raleway", sans-serif; }
  body, html { height: 100%; }
  body {
    background: rgb(9,9,121);
    background: linear-gradient(180deg, rgba(9, 9, 121, 0.14) 2%, rgba(0,127,255,0.5536589635854341) 55%);
  }
  .message {
    text-align: center;
    margin: 20% 10%;
  }
  .author {
    position: fixed;
    right: 30px;
    bottom: 30px;
    color: #c50c2d;
    font-weight: bold;
  }
</style>

<body>
<div>
  <div class="message">
    <h1>Continuous Integration as Code</h1>
    <hr style="border: 1px solid #066f09ed; margin: auto; width: 30%">
    <p>Backend (API)</p>
  </div>
  <div class="author">by Ing Gary Ascuy</div>
</div>

</body>
</html>
`

home.use('/', (req, res) => res.send(html))
