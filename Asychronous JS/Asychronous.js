//<--- Asychronous JavaScript --->

// console.log('hello');

// setTimeout(function(){
//     console.log('I am from setTimeout.');
// },3000)
// console.log('javascript');


function waitforSevenSeconds(){
    let ms = 7000 + new Date().getTime();
    while (new Date() < ms){}
}
// console.log('start');

setTimeout(()=>{
    console.log('I am from TimeOut');
},2000)
2
// console.log('end');
waitforSevenSeconds()