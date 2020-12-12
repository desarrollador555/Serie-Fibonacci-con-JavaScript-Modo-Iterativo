
function fibonachi(numeroIteracion){
    let fibonachiArray=[ 0 , 1 ];
                    
    for(let i=2;i<numeroIteracion;i++){
        let nuevoElemento=fibonachiArray[i-1]+fibonachiArray[i-2];
        fibonachiArray.push(nuevoElemento);
    }
    for (const elemento of fibonachiArray) {
        document.write(elemento+"<br>");
    }
}
document.write(fibonachi(100));

function fibonachiRecursivo(iteracion){
    if(iteracion==0){
        return 0;
    }
    if(iteracion==1){
        return 1;
    }
    return fibonachiRecursivo(iteracion-1)+fibonachiRecursivo(iteracion-2);
}
document.write(fibonachiRecursivo(100));
    
