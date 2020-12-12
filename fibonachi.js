
// function fibonachi(numeroIteracion){
//     let fibonachiArray=[ 0 , 1 ];
//                     //   0,  1,  2,  3, 4
//     for(let i=2;i<numeroIteracion;i++){
//         let nuevoElemento=fibonachiArray[i-1]+fibonachiArray[i-2];
//         fibonachiArray.push(nuevoElemento);
//     }
//     for (const elemento of fibonachiArray) {
//         document.write(elemento+"<br>");
//     }
// }
// fibonachi(10);

// function fibonachiRecursivo(iteracion){
//     if(iteracion==0){
//         return 0;
//     }
//     if(iteracion==1){
//         return 1;
//     }
//     return fibonachiRecursivo(iteracion-1)+fibonachiRecursivo(iteracion-2);
// }
// document.write(fibonachiRecursivo(100));
const form=document.getElementById("formulario");
    // form.setAttribute("STYLE","color:red");
    const label=document.createElement("H1");
    // let texto=;
        label.appendChild(document.createTextNode("nodo"));
        form.appendChild(label);
        alert(label.outerHTML);
    
