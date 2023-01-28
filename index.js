                                        // Array and loops

// const languages = ['JavaScript','python','c','React.js','Angular'];

// console.log(languages.length);
// console.log(languages[0]);

// <--- push ---> add element in the last item
// languages.push('Html')
// console.log(languages);

// <--- unshift ---> add element in the first item
// languages.unshift('Css')
// console.log(languages);

// <--- pop ---> remove last item in the array
// languages.pop()
// console.log(languages);
// console.log(languages.pop()); remove item return to console

// <--- shift ---> remove first item in the array
// languages.shift()
// console.log(languages);

// =====================================================================================================

                                            // Loops

    // for(i=0;i<4;i++){
    //     console.log("*");
    // }


    // const actors = [
    //     {
    //         name:'Actor 1',
    //         payment:100
    //     },
    //     {
    //         name:'Actor 2',
    //         payment:150
    //     },
    //     {
    //         name:'Actor 3',
    //         payment:200
    //     },
    // ]

    // <--- For loop --->
    // for(i=0;i<actors.length;i++){
    //     actors[i].payment = actors[i].payment-10
    // }
    // console.log(actors);

    // <--- ForEach --->
    // actors.forEach((actor)=>{
    //     actor.payment = actor.payment-10
    // })

    // console.log(actors);

    // <--- For of Loop --->

    // for(let actor of actors){
    //     actor.payment = actor.payment-20
    // }

    // console.log(actors);

// ============================================================================================
    // <--- Filter --->

// const students = [
//     {
//         name:'Student 1',
//         marks:45
//     },
//     {
//         name:'Student 2',
//         marks:60
//     },
//     {
//         name:'Student 3',
//         marks:35
//     }
// ];

// const failed = students.filter((student)=>{
//     if(student.marks<45){
//         return true
//     }
//         return false;
    
// })

// console.log(failed);

// ====================================================================================

// <--- Map --->

// const users = [
//     {
//         fname:'John',
//         lname:'Doe'
//     },
//     {
//         fname:'Jane',
//         lname:'Doe'
//     },
// ];

// const finalUsers= users.map((user)=>{ 
//     return {
//         // fullname:user.fname + " " + user.lname  old method
//         fullname: `${user.fname} ${user.lname}`  
//     }
// })

// console.log(finalUsers);

// =================================================================================================

// <--- Reduce --->

const movies = [
    {
        name:'Interstellar',
        budget:100
    },
    {
        name:'Social',
        budget:150
    },
    {
        name:'Pathan',
        budget:300
    }
];

// let total = 0

// movies.forEach((movie)=>{
//     // total = total + movie.budget
//     total += movie.budget
// })
// console.log(total);


const total = movies.reduce((acc,curr)=>{
    acc = acc+curr.budget;
    return acc;
},0)

console.log(total);