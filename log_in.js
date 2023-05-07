const loginBtn = document.getElementById('login')
let loginForm = document.getElementById("login-form");


var arrofuser = [];



function generateToken() {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let result = '';
    for ( var i = 0; i < 16; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
 }

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
   
    let users = JSON.parse(localStorage.getItem("TotalUser"));
    users.forEach(element => {
        if(element.email === loginForm.elements["email"].value && element.password === loginForm.elements["pass"].value){
            let currentUser = element;
             currentUser["Token"] = generateToken();
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            // redirect to login page
            window.location.href = "./shop.html";
        }
    });
    document.getElementById('message').style.display='inline';
    document.getElementById('message').setAttribute('class','green')
    document.getElementById('message').innerText='login Successfully';


})