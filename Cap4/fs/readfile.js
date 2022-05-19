const fs = require('fs');

//assincrono (nao bloqueante)
fs.readFile('texto.txt',(err,data)=>{
    if (err) throw err;

  //  console.log(data.toString());
});
//sincrono (bloqueante)
console.log('---------------------------------')
const texto = fs.readFileSync('texto.txt');
console.log(texto.toString());