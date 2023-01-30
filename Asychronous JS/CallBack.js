// <--- Callbacks --->

// Scenario


/*
1. Register
2. Send Welcome email
3. Login
4. Get user data
5. Display user data
*/


function register(callback){
    setTimeout(()=>{
        console.log('Register end');
        callback()
    },1000)
}

function sendEmail(callback){
    setTimeout(()=>{
        console.log('Send Email end');
        callback()
    },2000)
}

function login(callback){
    setTimeout(()=>{
        console.log('Login end');
        callback()
    },3000)
}

function getUserData(callback){
    setTimeout(()=>{
        console.log('Get user Data end');
        callback()
    },4000)
}

function displayUserData(){
    setTimeout(()=>{
        console.log('Display User Data end');
    },5000)
}

// callback hell
register(function(){
    sendEmail(function(){ 
        login(function(){
            getUserData(function(){
                displayUserData()
            })
        })
    })
})



console.log('Other application  work!');