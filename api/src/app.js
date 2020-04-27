import { get } from './settings'
import express from 'express'

export async function main() {
  const { host, port } = get('server')
  const app = express();

  app.get('/', (req, res) => {
      res.send('An alligator approaches!');
  })

  app.listen(+port, host, () => console.log('API listening on port 3000!'))
}

main()
