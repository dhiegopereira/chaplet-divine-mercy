import 'dotenv/config'
import { exec } from 'child_process'

const port = process.env.PORT || 3000

exec(`http-server ./dist -p ${port}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`)
    return
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`)
    return
  }
  console.log(stdout)
})
