// Streams  --> Escrita e Leitura
// toda stream tem um método read
// streams nao trabalham com strings, numbers e etc, eles leem buffers

// process.stdin
//   .pipe(process.stdout)

import { Readable, Writable, Transform } from "node:stream"

// Stream de Leitura
class OneToHundredStream extends Readable{
  index = 1

  _read(){
    const i = this.index++

    setTimeout(()=>{
      if(i > 100){
        this.push(null)
      }else{
        const buff = Buffer.from(String(i))
        this.push(buff)
      }
    }, 100)
  }
}

// Stream de transformação de valores
class InverseNumberStream extends Transform{
  _transform(chunk, encoding, callback){
    const transformed =  Number(chunk.toString()) * -1
    callback(null, Buffer.from(String(transformed)))
  }
}

// Stream de escrita
class MultiplyByTenStream extends Writable{
  // Chunk -> leitura
  // Encoding -> como a info esta codificada
  // Callback -> funcao que a funcao de escrita chama, quando ela termina de executar
  _write(chunk, encoding, callback){
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream())