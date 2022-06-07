'use strick';
const documentReady =()=> {
    
    const form =document.getElementById('formCalculadora');
    
    
    const calcular=(e)=> {
        e.preventDefault(); //previene el comportamiento por defecto 
        
        const numero1 =parseInt(document.getElementById('numero1').value);//seleccionas el elemento y obtienes el valor 
        const operador =document.getElementById('operador').value;
        const numero2 =parseInt(document.getElementById('numero2').value);
        const contenedorError =document.getElementById('contenedorError');
        const contenedorResultado= document.getElementById('contenedorResultado')
      if (isNaN(numero1) || isNaN(numero2)) {
         contenedorError.innerHTML = ('completar el formulario ');
       

      } else  {
        contenedorError.innerHTML= ''; //para borrar


        let resultado = 0;
        contenedorError.innerHTML ='';
         switch (operador) {
             case '+':
               resultado = numero1 + numero2;
             break;

             case '-':
                resultado= numero1 - numero2;
             break;

             case '*':
                resultado= numero1 * numero2 ;
             break;

             case '/':
              
             
              
            if (numero1 === 0 || numero2 ===0){
                contenedorError.innerHTML='los operadores no pueden ser cero';
                }  else { resultado =numero1 / numero2; }
                 break;
            default:
             contenedorError.innerHTML='seleccionar una operación válida';
                     
                  break;
         }

         contenedorResultado.innerHTML = resultado;
      }
         setTimeout(()=>{
        contenedorError.innerHTML= '';
      },2000);
    };


    formCalculadora.addEventListener('submit', calcular);




}

 


document.addEventListener('DOMContentLoaded', documentReady);