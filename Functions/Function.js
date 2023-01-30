// <--- Function --->

// function login (username,password){
//     console.log(`${username}, ${password} logged in successfully`);
// }

// login('John','john@123')
// login('Jane','jan@123')


// function upperCase (str){
//     return str.toUpperCase()
// }
// const result = upperCase('javascript')
// console.log(result);

// function calculateArea(width,height){
//     const area = width * height
//     return area
// }

// const area = calculateArea(30,40)
// console.log(area);

// if height value is not assign so we can use default parameters
// Default parameters
// function calculateArea(width,height=1){  //one is default parameters
//     // height = height === undefined ? 1 :height;   // before es6 features using this method
//     const area = width * height
//     return area
// }

// const area = calculateArea(30)
// console.log(area);


// Variable Scope


// <--- Function Declaration and Function Expression --->

// Declration 
    // function login(){

    // }
// Experation and Anonymus function
    // const login = function(){
    //     console.log('LoggedIn');
    // }
    // login()

    // <--- Callback --->

    // function formatText(text,formatCb){
    //     return typeof formatCb === 'function'?formatCb(text):text.toUpperCase();
    // }

    // const result = formatText('hello',function(text){
    //     return text.charAt(0).toUpperCase()+text.slice(1)
    // })

    // console.log(result);


    // Good Practices

    // 1. Naming
    // 2. show,.get,.calc
    // 3. function name should be descriptive 