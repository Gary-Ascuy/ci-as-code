import { get } from './settings'

export async function main() {
  console.log(get('server'))
  
}

main()
