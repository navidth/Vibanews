let MenuLogin =false;
const boxLogin = () => {
    console.log("Login");
    let loginBox = document.getElementById("btn-login");
    let overlayLogin = document.getElementById("overlayLogin");
    if (MenuLogin){
    overlayLogin.style.height='100%';
    MenuLogin=false;
    }else{
    overlayLogin.style.height='0%';
    MenuLogin=true;
    }
}

function handleLoginn(){
    let btnLogin = document.getElementById('btnLoginn')
    let btnSign = document.getElementById('btnSignn')
    let modalLogin = document.getElementById('modal-body-loginn')
    let modalSign = document.getElementById('modal-body-signn')
    modalLogin.classList.add('d-block')
    modalLogin.classList.remove('d-none')
    modalSign.classList.add('d-none')
    modalSign.classList.remove('d-block')
    btnLogin.classList.add('activeted-btn')
    btnSign.classList.remove('activeted-btn')
}
function handleSignn(){
    let btnSign = document.getElementById('btnSignn')
    let btnLogin = document.getElementById('btnLoginn')
    let modalLogin = document.getElementById('modal-body-loginn')
    let modalSign = document.getElementById('modal-body-signn')

    modalLogin.classList.remove('d-block')
    modalLogin.classList.add('d-none')
    modalSign.classList.remove('d-none')
    modalSign.classList.add('d-block')
    btnSign.classList.add('activeted-btn')
    btnLogin.classList.remove('activeted-btn')
}

//...............................Validation form Login................
const formLogin =document.getElementById('form-login')
const phoneLogin =document.getElementById('user-phone')
const emailLogin =document.getElementById('user-email')
const passLogin =document.getElementById('user-pass')

const setErrors=(element,massage)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = massage;
    console.log([massage])
}
const setSucces = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// / validations modal
const validateInputsLogin = () =>{
    const phoneLoginValue = phoneLogin.value.trim();
    const emailLoginValue = emailLogin.value.trim();
    const passLoginValue = passLogin.value.trim();
    let isValidet = true;
    if(phoneLoginValue === ''){
        isValidet= false;
        setErrors(phoneLogin,'شماره تلفن اجباری است');
    }else if(!/^09[0-9]+$/.test(phoneLoginValue)) {
        setErrors(phoneLogin, 'شماره تلفن باید فقط شامل اعداد باشد و با 0 و 9 شروع شود');
        isValidet= false;
    }else if(phoneLoginValue.length !== 11){
        setErrors(phoneLogin,"شماره تلفن باید شامل 11 کاراکتر باشد");
        isValidet= false;
    }
    else{
        setSucces(phoneLogin)
    }

    if(emailLoginValue === ''){
        isValidet= false;
        setErrors(emailLogin,' ایمیل اجباری است');
    }else if(!isValidEmail(emailLoginValue)){
        isValidet= false;
        setErrors(emailLogin, 'فرمت ایمل صحیح نیست')

    }else{ 
        setSucces(emailLogin)
    }

    if(passLoginValue === ''){
        isValidet= false;
        setErrors(passLogin,'داشتن رمز عبور اجباری است');
    }else if (passLoginValue.length < 8 ){
        isValidet= false;
        setErrors(passLogin, 'رمز عبور باید حداقل هشت کاراکتر باشد')
    }
    else{
        setSucces(passLogin)
    }
    if (isValidet) 
    {
        let accounts = {
          phone: phoneLoginValue,
          email: emailLoginValue,
          password: passLoginValue
        };
        console.log('کاربر:', accounts);
        formLogin.submit();
    }
}
formLogin.addEventListener('submit',function(e){
    e.preventDefault();
    validateInputsLogin();
    

});
// .............................Validation Form Sign............................
const formSign = document.getElementById('form-sign')
const idSign = document.getElementById('user-id');
const phoneSign = document.getElementById('user-phone-sign');
const emailSign = document.getElementById('user-email-sign');
const passSign = document.getElementById('user-pass-sign');

const validateInputsSign = ()=> {
    const idSignValue = idSign.value.trim()
    const phoneSignValue = phoneSign.value.trim()
    const emailSignValue = emailSign.value.trim()
    const passSignValue= passSign.value.trim()
    let isValidetSign =true;

    if(idSignValue === ''){
        isValidetSign = false;
        setErrors(idSign, 'یک نام کاربری برای خود بنویسید')
    }else{
        setSucces(idSign)
    }

    if(phoneSignValue === ''){
        setErrors(phoneSign, 'شماره تلفن اجباری است ')
        isValidetSign = false;
    }else if (!/^09[0-9]+$/.test(phoneSignValue)) {
        setErrors(phoneSign, 'شماره تلفن باید فقط شامل اعداد باشد و با 0 و 9 شروع شود');
        isValidetSign = false;
    }else if(phoneSignValue.length !== 11){
        setErrors(phoneSign, 'شماره تلفن باید شامل 11 عدد باشد');
        isValidetSign = false;
    }
    else{
        setSucces(phoneSign)
    }

    if(emailSignValue === ''){
        setErrors(emailSign,' ایمیل اجباری است');
        isValidetSign = false;
    }else if(!isValidEmail(emailSignValue)){
        isValidetSign = false;
        setErrors(emailSign, 'فرمت ایمل صحیح نیست')

    }else{ 
        setSucces(emailSign)
    }

    if(passSignValue === ''){
        isValidetSign = false;
        setErrors(passSign,'داشتن رمز عبور اجباری است');
    }else if (passSignValue.length < 8 ){
        isValidetSign = false;
        setErrors(passSign, 'رمز عبور باید حداقل هشت کاراکتر باشد')
    }
    else{
        setSucces(passSign)
    }

    if (isValidetSign) {
        let accounts = {
          name: idSignValue,
          phone: phoneSignValue,
          email: emailSignValue,
          password: passSignValue
        };
        console.log('عضو جدید:', accounts);
        formSign.submit();
      }
}
formSign.addEventListener('submit',function(e){
    e.preventDefault();
    validateInputsSign();
})