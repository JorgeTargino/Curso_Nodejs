const fs = require('fs')

const arquivoAntigo = 'arquivo.txt'
const arquivoNovo = 'arquivo_novo.txt'

fs.rename(arquivoAntigo, arquivoNovo, function(err) {
  if (err) {
    console.log(err)
    return
  }
   console.log(`O doc ${arquivoAntigo} foi renomeado para ${arquivoNovo}`);
})
