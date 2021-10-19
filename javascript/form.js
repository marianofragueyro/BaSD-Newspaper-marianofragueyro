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
            errorPass.innerHTML ='The password is too short'
        }else if(password.value.match(numbersReg,subdomain)){
            errorPass.innerHTML = 'password accepted'}
        else (errorPass.innerHTML = 'The password must contain characters and numbers')
    })
confirmPass.addEventListener('blur', (e) =>{
    if(confirmPass.value !== password.value){
        errorConf.innerHTML = 'password must match';
        }
})
age.addEventListener('blur', (e) =>{
    if(age.value == ''|| age.value === null){
        errorAge.innerHTML = 'enter a valid age';
        }else if(age.value < 18){
            errorAge.innerHTML = 'You must be over 18 years old'
        }
    })
number.addEventListener('blur', (e) =>{
    if(number.value == ''|| number.value === null){
        errorAge.innerHTML = 'enter a valid phone number';
        }else if(number.value.length < 7){
            errorNum.innerHTML = 'Phone number must be at least 7 digits long'
        }else if(number.value.match(numbersReg)){
            errorNum.innerHTML = 'Valid phone number'
        }
})
adress.addEventListener('blur', (e) =>{
    if(adress.value == ''|| adress.value === null){
        errorAdress.innerHTML = 'enter a valid adress'
    }else if(adress.value.length < 5){
        errorAdress.innerHTML = 'Adress must be at least 5 digits long'
    }
})
city.addEventListener('blur', (e) =>{
    if(city.value == ''|| city.value === null){
        errorCity.innerHTML = 'enter a valid city';
        }else if(city.value.length < 3){
            errorCity.innerHTML = 'The name of the city must be at least 3 digits long'
        }
})
zipCode.addEventListener('blur', (e) =>{
    if(zipCode.value == ''|| zipCode.value === null){
        errorZip.innerHTML = 'enter a zip code';
    }else if(zipCode.value.length < 3){
        errorZip.innerHTML = 'zip code must be at least 3 digits long'
    }
})
dni.addEventListener('blur', (e) =>{
    if(dni.value == ''|| dni.value === null){
        errorDni.innerHTML = 'enter a dni'
    }else if(dni.value.length < 7){
        errorDni.innerHTML = 'DNI must containt at least 7 digits'
    }
})