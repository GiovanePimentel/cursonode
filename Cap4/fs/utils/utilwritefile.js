const {promisify} = require('util');
//L = Local // R = Remoto
let mCaminhoArquivo = '';
const writefile = promisify(require('fs').writeFile);
const conteudo = 'criando um arquivo utilizando promisify';
if (typeof process.argv[2] != 'string' ){
    //Por padrão vai criar local
    mCaminhoArquivo = `utilArquivo.txt`;
}else{
    mCaminhoArquivo = (process.argv[2] == 'R' ? `utilArquivo.txt`:`${__dirname}\\utilArquivo.txt`);
}
//Originalmente, é criado o arquivo no diretorio em que foi executado este arquivo;
//writefile(`utilArquivo.txt`,conteudo)
//Aqui é feito para criar sempre no diretorio deste arquivo.
//writefile(`${__dirname}\\utilArquivo.txt`,conteudo)
//Aqui é para criar com base na opcao passada
writefile(mCaminhoArquivo,conteudo)
.then(()=>{
    console.log('Arquivo utilArquivo criado com sucesso');
})
.catch((err)=>{
    console.log(`deu erro: ${err}`);
});