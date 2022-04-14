function soma(a){
    return new Promise((resolve,reject)=>{  
        setTimeout(()=>{
            resolve(a + 5000);
        },3000);
    });
}
soma(6000).then((resultado)=>{
    console.log(`Resolvido: ${resultado}`);
});

