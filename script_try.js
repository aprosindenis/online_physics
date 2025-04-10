/* JS */
// const form = document.getElementById('registration-form');
// form.addEventListener('submit', function(event) {
//  event.preventDefault();

//  const username = form.elements['username'].value;
//  const email = form.elements['email'].value;
//  const password = form.elements['password'].value;

//  console.log(username: ${username});
//  console.log(email: ${email});
//  console.log(password: ${password});
// });




function handle() {
    alert('Registration completed')
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
    console.log(input_values);
};


let btn = document.querySelector('.sub');
btn.addEventListener('click', handle);


// function handle() {
//     alert('Форма отправлена!');
//     let inputs = document.querySelectorAll("input");
//     let input_values = [];
//     for (let i = 0; i < inputs.length; i++) {
//         input_values.push(inputs[i].value);
//     }
//     console.log(input_values);
// }

// let button = document.querySelector('.btn');
// button.addEventListener('click', handle);