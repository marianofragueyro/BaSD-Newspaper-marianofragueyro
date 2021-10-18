var fname = document.getElementById('fname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPass = document.getElementById('confirmPass');
var age = document.getElementById('age');
var number = document.getElementById('number');
var adress = document.getElementById('adress');
var city = document.getElementById('city');
var zipCode = document.getElementById('zipCode');
var dni = document.getElementById('dni');
var errorName = document.getElementById('errorName');
var errorMail = document.getElementById('errorMail');
var errorPass = document.getElementById('errorPass');
var errorConf = document.getElementById('errorConf');
var errorAge = document.getElementById('errorAge');
var errorNum = document.getElementById('errorNum');
var errorAdress = document.getElementById('errorAdress');
var errorCity = document.getElementById('errorCity');
var errorZip = document.getElementById('errorZip');
var errorDni = document.getElementById('errorDni');
var form = document.getElementById('form');
var symbolsReg = /([@"'.?*+^$#])/;
var numbersReg = /[0-9]/;
var dotCom = /.com/;
var mailReg = /@/;
var subdomain = /(?<=@)[a-z]/;

///////////////////////////////////////////////////////

fname.addEventListener('blur', (e) =>{
    if(fname.value.length < 6){
        errorName.innerHTML = 'Name too short'}
})

email.addEventListener('blur', (e) =>{
    if(email.value == ''|| email.value === null){
            errorMail.innerHTML = 'enter a valid e-mail';
        }else if(email.value.match(mailReg)){
            errorMail.innerHTML = 'valid mail adress'
        }else(errorMail.innerHTML = 'invalid mail format')
})

password.addEventListener('blur', (e) =>{
    if(password.value == ''|| password.value === null){
            errorPass.innerHTML = 'enter a valid password';
        }else if(password.value.length < 8){
            errorPass.innerHTML ='The password is too short'};
})

confirmPass.addEventListener('blur', (e) =>{
    if(confirmPass.value !== password.value){
        errorConf.innerHTML = 'password must match';
        }
})

age.addEventListener('blur', (e) =>{
    if(age.value == ''|| age.value === null){
        errorAge.innerHTML = 'enter a valid age';
        }
})

number.addEventListener('blur', (e) =>{
    if(number.value == ''|| number.value === null){
        errorAge.innerHTML = 'enter a valid phone number';
        }else if(number.value.match(numbersReg)){
            errorNum.innerHTML = 'Valid phone number'
        }else(errorNum.innerHTML = 'Phone number must contain only numbers')
})

adress.addEventListener('blur', (e) =>{
    if(adress.value == ''|| adress.value === null){
        errorAdress.innerHTML = 'enter a valid adress'};
})

city.addEventListener('blur', (e) =>{
    if(city.value == ''|| city.value === null){
        errorCity.innerHTML = 'enter a valid city';
        }
})

zipCode.addEventListener('blur', (e) =>{
    if(zipCode.value == ''|| zipCode.value === null){
        errorZip.innerHTML = 'enter a zip code';
    }
})

dni.addEventListener('blur', (e) =>{
    if(dni.value == ''|| dni.value === null){
        errorDni.innerHTML = 'enter a dni';
}})





//form.addEventListener('submit', (e) =>{
//    var messages = []
//    if(fname.value =='' || fname.value === null){
//        messages.push('enter a valid name')
//    }else if(fname.value.length < 6){
//        messages.push('The name is too short')
//    }if(messages.length > 0){
//        e.preventDefault()
//        errorName.innerHTML = messages.join(', ');
//}})
//form.addEventListener('submit', (e) =>{
//    var messages = [];
//    if(email.value == ''|| email.value === null){
//        messages.push('enter a valid e-mail');
//    }else if(email.value.match(symbolsReg)){
//        messages.push('valid mail adress')
//    }else(messages.push('invalid mail format'))
//    if(messages.length > 0){
//        e.preventDefault();
//        errorMail.innerHTML = messages.join(', ');
//}})
//
//form.addEventListener('submit', (e) =>{
//    var messages = [];
//    if(password.value == ''|| password.value === null){
//        messages.push('enter a valid password');
//    }else if(password.value.length < 8){
//        messages.push('The password is too short')
//    }
//    if(messages.length > 0){
//        e.preventDefault();
//        errorPass.innerHTML = messages.join(', ');
//}})
//form.addEventListener('submit', (e) =>{
//    var messages = [];
//    if(confirmPass.value !== password.value){
//        messages.push('password must match');
//    }
//    if(messages.length > 0){
//        e.preventDefault();
//        errorConf.innerHTML = messages.join(', ');
//}})
//
//form.addEventListener('submit', (e) =>{
//    var messages = [];
//    if(age.value == ''|| age.value === null){
//        messages.push('enter a valid age');
//    }
//    if(messages.length > 0){
//        e.preventDefault();
//        errorAge.innerHTML = messages.join(', ');
//}})
//
//form.addEventListener('submit', (e) =>{
//    var messages = [];
//    if(number.value == ''|| number.value === null){
//        messages.push('enter a valid phone number');
//    }
//    if(messages.length > 0){
//        e.preventDefault();
//        errorNum.innerHTML = messages.join(', ');
//}})
//
//form.addEventListener('submit', (e) =>{
//    var messages = [];
//    if(adress.value == ''|| adress.value === null){
//        messages.push('enter a valid adress');
//    }
//    if(messages.length > 0){
//        e.preventDefault();
//        errorAdress.innerHTML = messages.join(', ');
//}})
//
//form.addEventListener('submit', (e) =>{
//    var messages = [];
//    if(city.value == ''|| city.value === null){
//        messages.push('enter a valid city');
//    }
//    if(messages.length > 0){
//        e.preventDefault();
//        errorCity.innerHTML = messages.join(', ');
//}})
//
//form.addEventListener('submit', (e) =>{
//    var messages = [];
//    if(zipCode.value == ''|| zipCode.value === null){
//        messages.push('enter a zip code');
//    }
//    if(messages.length > 0){
//        e.preventDefault();
//        errorZip.innerHTML = messages.join(', ');
//}})
//