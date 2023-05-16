console.log("1")








function runPasswordCheck(){
    var password1= document.getElementById('password').value
    var password2= document.getElementById('password-check').value
    var passwordField = document.getElementById("password")
    var passwordFieldTwo = document.getElementById("password-check")
    console.log(password1)
    if (password1 === '' || password2 === ''){
        console.log('hello there')
        passwordField.classList.remove("wrong")
        passwordFieldTwo.classList.remove("wrong")

    }

    else{
        passwordCheck()
    }

    

    
    
    
}
function passwordCheck(){
    var password1= document.getElementById('password').value
    var password2= document.getElementById('password-check').value
    var passwordField = document.getElementById("password")
    var passwordFieldTwo = document.getElementById("password-check")
    console.log(password1+password2)
    if (password1 != password2){

        passwordField.classList.add("wrong")
        passwordFieldTwo.classList.add("wrong")
        console.log("dont match")
    }
    if (password1 === password2){
        console.log('CORRECT')

        passwordField.classList.remove("wrong")
        passwordFieldTwo.classList.remove("wrong")

    }
}

function remove(){
    var passwordField = document.getElementById("password")
    var passwordFieldTwo = document.getElementById("password-check")
    passwordField.classList.remove("wrong")
    passwordFieldTwo.classList.remove("wrong")
    console.log("2")
}