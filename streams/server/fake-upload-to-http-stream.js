import { Readable } from 'node:stream'

class OneToOneHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      }
      else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 5);
  }
}

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToOneHundredStream(),
  duplex: 'half'
}) //.then(res => {
//   return res.text()
// }).then(data => {
//   console.log(data)
// })