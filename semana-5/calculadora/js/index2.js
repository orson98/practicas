'use strict';

    const documentReady = () => {
      // const frutas = ['1','2','3'];

     //   for (let i = 0 ; i< frutas.length; i++ ) {
       //     console.log(frutas[i]);
    //}
   //let i =  0;
    // bucles
   // do {
      //  console.log(frutas[i]);
      //  i++;


   // } while (1< frutas.length)
    //  console.log(frutas[i]);
      //  i++; tambien se puede hacer eso 

      // DECLARACION FOR IN END FOR OF

    //  for (let i in frutas ){
    //      console.log(`fruta número ${+i + 1} : ${frutas [i]}`);
    //  }

        // DECLARACION DE UN FOR OF (  te saca el indice del elemento )

     //   for(let element of frutas ){

       //     console.log(element);

        //}

// FUNCIONES 

    cuadradoDeUNúmeroD(5);
     function cuadradoDeUNúmeroD(numero){
         console.log(numero ** 2);
     };

     const cuadradoDeUNúmeroDE = function (numero){
         return (numero ** 2);
     };

     console.log(cuadradoDeUNúmeroDE(5));

      const cuadradoDeUNúmeroA =numero => numero ** 2 ;
      console.log(cuadradoDeUNúmeroA(5)); //  utilizar este procediemiento 

    }
    document.addEventListener('DOMContentLoaded' , documentReady);
 