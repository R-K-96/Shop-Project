const signupbtn = document.getElementById('signup');
const form = document.getElementById('signup-form')

var arrofuser = [];

signupbtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const firstname = document.getElementById('firstName').value;
    const lastname = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const conpass = document.getElementById('pass2').value;

    if(firstname == '' || lastname =='' || email == ''|| pass == '' ||conpass == ''){
        alert("Erorr: Please fill the all given info")
        return
    }
    if(pass !== conpass){
        alert("Erorr: Password and Confirm Password should be same")
        return;
    }

    //why  create the obj  for the store in local storage
    var user = {            
        firstname: firstname,
        lastname: lastname,
        email:email,
        password: pass
        // Token : Tokens
    } 

    let flag=false;
    if(localStorage.getItem('TotalUser')){
        console.log("hello");
        arrofuser=JSON.parse(localStorage.getItem('TotalUser'));
        arrofuser.forEach((user)=>{
            if(user.email==email){
                flag=true;
                document.getElementById('message').style.display='inline';
                document.getElementById('message').setAttribute('class','red')
                document.getElementById('message').innerText='Error :User Already Exist.';
            }
        })
    }

    if(flag==true){
        //user already exist;
        return;
    }

    arrofuser.push(user);
    console.log("user", user);
    console.log(arrofuser);

    localStorage.setItem("TotalUser", JSON.stringify(arrofuser));
    
    document.getElementById('message').style.display='inline';
    document.getElementById('message').setAttribute('class','green')
    document.getElementById('message').innerText='User Successfully Added';

    // form.reset();


    setTimeout(() => {
        window.location.href = './login.html';
      }, 100);
    });