let kurslar = '';
for(let i=0; i<valyutas.length; i++){
    kurslar+=valyutas[i].Ccy + " ";
}
let kurs1=prompt('Sizda bor kursni kiriting = \n'+kurslar + " UZS");
let kurs2=prompt('Pulingizni qaysi valyutaga ozgartirmoqchisiz\n'+kurslar+"UZS");
let miqdor=parseFloat(prompt('Sizda qancha miqdorda '+kurs1+' bor'));
let qiymat = 0;
let natija=0;

for(let i=0; i<valyutas.length; i++){
    if(kurs1==valyutas[i].Ccy){
        qiymat=miqdor*parseFloat(valyutas[i].Rate);
    }
    if(kurs1=='UZS'){
        qiymat=miqdor;
    }
}
for(let i=0; i<valyutas.length; i++){
    if(kurs2==valyutas[i].Ccy){
        natija=qiymat/parseFloat(valyutas[i].Rate);
    }
    if(kurs2=='UZS'){
        natija=qiymat;
    }
}
natija=natija.toFixed(2);
alert('Sizning ' + miqdor+' ' + kurs1 + ' Pulingiz = ' + natija +' ' +kurs2+' ga teng');
