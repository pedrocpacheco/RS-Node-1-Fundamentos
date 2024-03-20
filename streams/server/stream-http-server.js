import http from 'node:http'
import { Transform } from 'node:stream'

class InvertNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    console.log(transformed);

    callback(null, Buffer.from(String(transformed)))
  }
}

// req => ReadableStream
// res => WritableStream

const server = http.createServer(async (req, res) => {
  const infosRecebidas = []

  for await (const pedaco of req) {
    infosRecebidas.push(pedaco)
  }

  const fullStreamContent = Buffer.concat(infosRecebidas).toString()

  console.log(fullStreamContent);

  return res.end(fullStreamContent)

  // return req
  //   .pipe(new InvertNumberStream)
  //   .pipe(res)
})

server.listen(3334)