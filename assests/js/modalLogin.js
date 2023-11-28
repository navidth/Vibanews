function handleLogin(){
    let btnLogin = document.getElementById('btnLogin')
    let btnSign = document.getElementById('btnSign')
    let modalLogin = document.getElementById('modal-body-login')
    let modalSign = document.getElementById('modal-body-sign')
    modalLogin.classList.add('d-block')
    modalLogin.classList.remove('d-none')
    modalSign.classList.add('d-none')
    modalSign.classList.remove('d-block')
    btnLogin.classList.add('activeted-btn')
    btnSign.classList.remove('activeted-btn')
}
function handleSign(){
    let btnSign = document.getElementById('btnSign')
    let btnLogin = document.getElementById('btnLogin')
    let modalLogin = document.getElementById('modal-body-login')
    let modalSign = document.getElementById('modal-body-sign')

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

formLogin.addEventListener('submit',function(e){
    e.preventDefault();
    
    validateInputsLogin();
    

});
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

const validateInputsLogin = () =>{
    const phoneLoginValue = phoneLogin.value.trim();
    const emailLoginValue = emailLogin.value.trim();
    const passLoginValue = passLogin.value.trim();
    
    if(phoneLoginValue === ''){
        setErrors(phoneLogin,'شماره تلفن اجباری است');
    }else if(!/^09[0-9]+$/.test(phoneLoginValue)) {
        setErrors(phoneLogin, 'شماره تلفن باید فقط شامل اعداد باشد و با 0 و 9 شروع شود');
    }else if(phoneLoginValue.length !== 11){
        setErrors(phoneLogin,"شماره تلفن باید شامل 11 کاراکتر باشد")
    }
    else{
        setSucces(phoneLogin)
    }
    if(emailLoginValue === ''){
        setErrors(emailLogin,' ایمیل اجباری است');
    }else if(!isValidEmail(emailLoginValue)){
        setErrors(emailLogin, 'فرمت ایمل صحیح نیست')

    }else{ 
        setSucces(emailLogin)
    }
    if(passLoginValue === ''){
        setErrors(passLogin,'داشتن رمز عبور اجباری است');
    }else if (passLoginValue.length < 8 ){
        setErrors(passLogin, 'رمز عبور باید حداقل هشت کاراکتر باشد')
    }
    else{
        setSucces(passLogin)
    }
    if (
        phoneLoginValue &&
        emailLoginValue &&
        passLoginValue &&
        /^09[0-9]+$/.test(phoneLoginValue) &&
        isValidEmail(emailLoginValue) &&
        passLoginValue.length >= 8 &&
        phoneLoginValue.length === 11
      ) {
        let account = {
          phone: phoneLoginValue,
          email: emailLoginValue,
          password: passLoginValue
        };
        console.log('کاربر:', account);
        document.getElementById('btn-account').classList.add('d-block');
        document.getElementById('btn-account').classList.remove('d-none');
        document.getElementById('btn-login').classList.add('d-none');
    }
}
// .............................Validation Form Sign............................
const formSign = document.getElementById('form-sign')
const idSign = document.getElementById('user-id');
const phoneSign = document.getElementById('user-phone-sign');
const emailSign = document.getElementById('user-email-sign');
const passSign = document.getElementById('user-pass-sign');

formSign.addEventListener('submit',function(e){
    e.preventDefault();
    validateInputsSign();
})
const validateInputsSign = ()=> {
    const idSignValue = idSign.value.trim()
    const phoneSignValue = phoneSign.value.trim()
    const emailSignValue = emailSign.value.trim()
    const passSignValue= passSign.value.trim()

    if(idSignValue === ''){
        setErrors(idSign, 'یک نام کاربری برای خود بنویسید')
    }else{
        setSucces(idSign)
    }
    if(phoneSignValue === ''){
        setErrors(phoneSign, 'شماره تلفن اجباری است ')
    }else if (!/^09[0-9]+$/.test(phoneSignValue)) {
        setErrors(phoneSign, 'شماره تلفن باید فقط شامل اعداد باشد و با 0 و 9 شروع شود');
    }else if(phoneSignValue.length !== 11){
        setErrors(phoneSign, 'شماره تلفن باید شامل 11 عدد باشد');
    }
    else{
        setSucces(phoneSign)
    }
    if(emailSignValue === ''){
        setErrors(emailSign,' ایمیل اجباری است');
    }else if(!isValidEmail(emailSignValue)){
        setErrors(emailSign, 'فرمت ایمل صحیح نیست')

    }else{ 
        setSucces(emailSign)
    }
    if(passSignValue === ''){
        setErrors(passSign,'داشتن رمز عبور اجباری است');
    }else if (passSignValue.length < 8 ){
        setErrors(passSign, 'رمز عبور باید حداقل هشت کاراکتر باشد')
    }
    else{
        setSucces(passSign)
    }
    if (
        idSignValue &&
        phoneSignValue &&
        emailSignValue &&
        passSignValue &&
        /^09[0-9]+$/.test(phoneSignValue) &&
        isValidEmail(emailSignValue) &&
        passSignValue.length >= 8 &&
        phoneSignValue.length === 11
      ) {
        let account = {
          name: idSignValue,
          phone: phoneSignValue,
          email: emailSignValue,
          password: passSignValue
        };
        console.log('عضو جدید:', account);
      }
}