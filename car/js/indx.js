console.log("this is project");


const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');


let emailvalid = false;
let validPhone = false;
let validUser = false;


$('#failure').hide();
$('sucess').hide();


name.addEventListener('blur', () => {
    console.log("name is blure");

    // let regex = /^[a-zA-Z]([0-9a-ZA-Z]){2,10}$/;
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("your name is valid");
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log("your name is not valid");
        name.classList.add('is-invalid');
        validUser = false;
    }
})


email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})



phone.addEventListener('blur', () => {
    console.log("phone is blureed");

    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("your phone is valid")
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})


let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('you clicked on submit');
    console.log(validEmail, validPhone, validUser);

    if (validEmail && validUser && validPhone) {
        let failure = document.getElementById('failure');

        console.log('phone,email and user are valid.....')
        let success = document.getElementById('success');
        success.classList.add('show');

        $('#failure').hide();
        
        $('#success').show();
    }
    else {
        console.log('one of one,email or user not valid not valid');
        let failure = document.getElementById('failure');
        failure.classList.add('show');

        $('#success').hide();
        $('#failure').show();
    }
})