'use strict'


// // let num;
// // num = 5;
// // console.log(num);

// // const someCode = (BIRTHDAY)=>{
// //     return BIRTHDAY;
// // }
// // const BIRTHDAY = '18.04.1982'; // make uppercase?
// // const AGE      = someCode(BIRTHDAY); // make uppercase?
// // console.log(AGE);

// // let name = "joni";

// // console.log( `hello ${1}` ); // ?

// // console.log( `hello ${"name"}` ); // ?

// // console.log( `hello ${name}` ); // ?

// // let undef = typeof undefined // "undefined"

// // let nol   = typeof 0.1211 // "number"

// // let bol   = typeof true // "boolean"

// // let foo   = typeof "foo" // "string"

// // let sym   = typeof Symbol("id") // "symbol"

// // let mat   = typeof Math // "object"  (1)

// // let obj   = typeof null // "object"  (2)

// // let al    = typeof alert // "function"  (3)

// // // console.log(mat);
// // class Car {    
// //     constructor(type,status){
// //         this.type  = type;
// //         this.color; 
// //         this.engineStart = status;     
// //     }

// //     isEngineStart(){
// //         this.engineStart = 'On';
// //         console.log('Mesin Nyalah');
// //     }    

// //     isEngineOff(){
// //         this.engineStart = 'Off';
// //         console.log('Mesin Mati');
// //     }

// //     set Color(color){    
// //         this.color = color;
// //     }
    
// //     get Color(){        
// //         return typeof this.color;        
// //     }    

// //     static IsEngineOn(state){               
// //         if(state.engineStart === 'Off'){
// //             console.log('Mesin Mati');
// //         }
// //         else{
// //             console.log('Mesin Nyalah');
// //         }
    
// //     }
// // }

// // const car = new Car;
// // Car.IsEngineOn(car);
// // car.isEngineStart();

// // const carColor = new Car('Sedan','red','Off');
// // carColor.Color = 'red';
// // let a = carColor.Color;

// // console.log(car);

// // // const x = {
// // //     type:'sedan',
// // //     color:'red',
// // //     IsEngineOn:()=>{
// // //         return 'adre';
// // //     }
// // // }

// // // console.log(z);

// // function str (){
// //     return 1+2+3;
// // }

// // function str(){
// //     return 1+2;
// // }
// // // str();
// // console.log(str());

// // // let a = 1;
// // //     a=2;

// // //  console.log(a);
// // class Mobil{
// //     cekmesin(){
// //         return 'mesin eropa';
// //     }

// //     ukuranKaca(p,l){
// //         return p*l;
// //     }

// //     ukuranKaca(panjang) {
// //         return panjang;
// //     }
// //  }

// //  class Mesin extends Mobil{    

// //     cekmesin1(){
// //         return 'mesin jawa';
// //     }
    
// //     ukuranKaca(p,l){
// //         return p*l;
// //     }
// //  }

// // let oop = new Mesin;
// // // console.log(oop.ukuranKaca(3,2));
// // console.log(oop.cekmesin());

// // function Angka() {
// //     // arguments[1] = 0;
// //     console.log(arguments);
// //   }
  
// //     let pertama = 15,
// //       kedua = 30;
// //       Angka(pertama, kedua); // mengembalikan 0, 30
// //       console.log(pertama); // bernilai 15 (tidak berubah)
        
// //         let tambah = function ( pertama, kedua ) {
// //             // return pertama + kedua;
// //             console.log(pertama + kedua);
// //         }
// //         tambah(pertama,kedua);


// //         function nilai (a,b,c){
// //            console.log(a+b+c);
// //         }

// //         let args = [1,2];
// //         nilai(5,...args);


// //         let nums = 5;
// //         function tot (test1,test2){
// //             console.log( test1 + test2 +nums);
// //         }

// //         tot(1,2);        



        
// // function aux(x,y,z){
// //     console.log(x + y + z);
// // }        
// // let ats = [1,2,3];
// // aux(...ats);      


// // function oves(a,b){
// //     return 8;
// // }

// // function oves(a,b){
// //     return a+b;
// // }

// // console.log(oves(1,2));

// var number = 8349234;
// var rem, 
//     temp, 
//     final = 0;
// temp = number;
// while(number>0)
// {
//     rem    = number%10;    
//     number = parseInt(number/10);    
//     final  = final*10+rem;    
//     console.log(`${rem},${number}`)
// }
// if(temp == final)
//     console.log(true); 
// else 
//     console.log(false);




var arr1 = [1,3,5];
var arr2 = [1,2,3,4,5];
var cc   = arr1.concat(arr2);
var srt  = cc.sort((a, b) =>  a - b); 
var t = [];
for(var i = 0; i < srt.length; i++){  
    console.log(srt[i]);  
    console.log(arr2[i]);  
    t.push(arr1[i]);
    if((arr2[i] == undefined))
        false;
    else    
    t.push(arr2[i]);  
}
t.sort(function(a,b) {
    return a - b;
});
console.log(t);
// console.log(t);
// let lowMiddle  = (srt.length - 1) / 2;
// let highMiddle = (srt.length - 1) / 2;
// let median = ( srt[lowMiddle] + srt[highMiddle]) / 2;
// console.log(median);


// var number = 1001;
// var c = "";

// number.forEach(function(x){

// });