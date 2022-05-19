const fs = require('fs');
const assets=['css','js','images','fonts','lib'];

function make(dir){

    dir.forEach((element) => {
        fs.mkdir(`projeto/assets/${element}`,{recursive:true},(err)=>{
            if (err) throw err;
            console.log('diretorio criado com sucesso.',element);
        });
    });
}
make(assets);