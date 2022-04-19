function sum(a){
    return new Promise((resolve,reject)=>{  
        if (Number(a) === NaN || Number(a) == undefined || typeof a != 'number'){
            reject('Tá de brincadeira ?!');
        }
        setTimeout(()=>{
            resolve(a + 5000);
        },3000);
    });
}
async function main(){
    try {
        const result = await sum('a');
        console.log(`Resultado com Async/Await: ${result}`);
    } catch (error) {
        console.log(`Temos problemas: ${error}`);
        console.log(process.env.USERNAME);
    }
}


 main();