import fs from 'fs'
import { promisify } from 'util'
const readFile = promisify(fs.readFile)

async function main () {
  if (process.argv.length < 3) {
    throw new Error('Usage: favorites <filename>')
  }

  const filename = process.argv[2]
  console.log(await readFile(filename, 'utf8'))
}

main().catch(console.error)
