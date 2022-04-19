function soma(a,callback){
    return setTimeout(()=>{
        return callback(null,a + 5000);
    },3000);
    
}
//callback function
//funções assincronas sempre tem uma callback como ultimo parametro
//callback functions sempre recebem por parametro o possivel tratamento do erro seguido da operação desejada;
//se não der erro, realiza a operação;
function resolveSoma(err, resultado){
    if (err) throw err;
    console.log(resultado);

}

soma(200,resolveSoma);