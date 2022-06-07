 'use strick';

 const documentReady =()=> {
    const heroTitle = document.querySelector('.hero__title');
    const heroButtonSi =document.getElementById('heroButtonSi');
    const heroButtonNo =document.querySelector('#heroButtonNo');

  const nowSomosNobios = () => {
    alert ('ahora somos novios !!');
    alert ('nuestra boda es mañana');
    location.href = 'https://youtu.be/lOD4tHz4A_8';

  }


  const evitarKCRompaMyBobo = () => {
    heroButtonNo.style.position='absolute';
    heroButtonNo.style.top=(Math.random () * window.innerHeight)+'px';
    heroButtonNo.style.left=(Math.random () * window.innerWidth)+'px';

  };

        const partner = prompt(' dime tu nombre' ) ;
       // heroTitle.innerHTML = heroTitle.innerHTML + partner + 'jeje';
       heroTitle.innerHTML +=  partner  + ':)';



        heroButtonSi.addEventListener('click',nowSomosNobios );
        heroButtonNo.addEventListener('mouseover',evitarKCRompaMyBobo);
 };


 document.addEventListener('DOMContentLoaded', documentReady);