const form=document.querySelector('#form')
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');


form.addEventListener('submit',(e)=>{
e.preventDefault();
validateInput();
})

function validateInput() {
    const usernameval = username.Value.trim()
    const emailval =email.valid.trim();
    const cpasswordval=password.valid.trim();
    const cpassword=cpassword.valid.trim();

    if (usernameval===''){
        setError(username, 'Username is required')
    }
    else{
    setSuccess(username)
    }

    if(emailval===''){
        setError(email,'Email is required')
    }
    else if (!validateEmail(emailval)){
        setError(email,'please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(cpasswordval===''){
        setError(password,'password is required')
    }
else if(cpasswordval.length<8){
    setError(password(password,'password must be atleast 8 char'))
}
else{
    setSuccess(password)
}

    if(cpassword===''){
    setError(cpassword,'confirm password is required')
}
else if (cpasswordval! ==cpasswordval){
    setError(cpassword,'password does not match')
}
else{
    setSuccess(cpassword)
}
}

//element -password,msg-pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')


    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')


    errorElement.innerText ='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

}

