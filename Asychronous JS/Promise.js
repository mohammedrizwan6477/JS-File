function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Register end');
            resolve()
        },1000)
    })
}

function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // reject('error while sending email')
            console.log('Send Email end');
            resolve()
        },1000)
    })
}

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Login end');
            resolve()
        },1000)
    })
}

function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Get user Data end');
            resolve()
        },1000)
    })
}

function displayUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Display User Data end');
            resolve()
        },1000)
    })
}

// register().then(sendEmail).then(login).then(getUserData).then(displayUserData)

async function authenticate(){
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData()
}


authenticate().then(()=>{
    console.log('All Set!');
})
// .catch((err)=>{
//     console.log('Error',err);
// })

console.log('Other application  work!');