require('./subdiretorio/sub.js')
console.log('---------------tools.js---------------')
console.log(`Nome do Arquivo: `, __filename);
//retorna o nome do diretorio
console.log(`Diretorio do arquivo: `, __dirname);
//Retorna array com os parametros da execução
console.log(`Parâmetros de execução: `, process.argv);
//ambiente que o servidor esta rodando
console.log(`Ambiente de Servidor: `, process.platform);

//chamada 'nodemon tools.js -a arquivo.js'
//process.argv[2] = '-a'
//process.argv[3] = 'arquivo.js'
switch(process.argv[2]){
    case '-a':
        console.log('Execute a rotina principal.');
        break;
    case '-i':
        console.log('Execute a instalação.');
        break;
    case '-q':
        console.log('Encerrando Aplicação');
        process.exit();// Interrompe imediatamente o codigo
        break;
    default :
        console.log('Parametro inválido.');
}

//REtornando um parametro especifico
console.log(`Parametro específico: `,  process.argv[3]);


//VARIAVEIS DE AMBIENTE DO NODE NA MAQUINA(SERVIDOR) EM EXECUÇÃO
//console.log(`Parametro específico: `,  process.env);
console.log(`Sistema Operacional: `,  process.env.OS);
console.log(`ARquitetura do processador: `,  process.env.PROCESSOR_ARCHITECTURE);
console.log(`Nome do usuario no servidor: `,  process.env.USERNAME);
console.log(`Linguagem do servidor: `,  process.env.LANG);
console.log(`Nome do Servidor: `,  process.env.COMPUTERNAME);


console.log(`Diretorio do arquivo: `, __dirname);
console.log(`Diretorio em que foi invocado: `, process.cwd());