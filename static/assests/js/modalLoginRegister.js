export default class FormValidator {
    constructor(formId,userphone,userPass,userName,lastName,passAgain) {
        this.form = document.getElementById(formId);
        this.userphone = userphone
        this.userPass = userPass
        this.userName = userName
        this.lastName = lastName
        this.passAgain = passAgain
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.validateForm();
        });
    }
    validateForm() {
        const phoneInput = document.getElementById(this.userphone);
        const passwordInput = document.getElementById(this.userPass);
        

        if (!this.validatePhone(phoneInput.value)) {
            this.setError(phoneInput, 'شماره تلفن نامعتبر است.');
            return;
        } else {
            this.clearError(phoneInput);
        }
        if (!this.validatePassword(passwordInput.value)) {
            this.setError(passwordInput, 'رمز عبور نامعتبر است.');
            return;
        } else {
            this.clearError(passwordInput);
        }

        this.form.submit();
    }

    validatePhone(phone) {
        const phoneRegex = /^09\d{9}$/;
        return phoneRegex.test(phone);
    }
    validatePassword(password) {
        return password.length >= 8;
    }




    setError(element, errorMessage) {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = errorMessage;
    }
    clearError(element) {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = '';
    }
}
export class Login extends FormValidator {
    constructor() {
        super('form-login','user-phone','user-pass');
    }
}

export class Signup extends FormValidator {
    constructor() {
        super('form-sign', 'user-phone-sign', 'user-pass-sign', 'user-id', 'user-lastName', 'user-pass-again');
    
    }
    validateForm(){
        const nameInput =document.getElementById(this.userName)
        const lastNameInput =document.getElementById(this.lastName)
        const passAgainInput = document.getElementById(this.passAgain)

        if(!this.validateUsername(nameInput.value)){
            this.setError(nameInput,'نام باید شامل حروف باشد')
            return
        }else{
            this.clearError(nameInput)
        }

        if(!this.validateLastname(lastNameInput.value)){
            this.setError(lastNameInput,'نام خانوادگی باید شامل حروف باشد')
            return
        }else{
            this.clearError(lastNameInput)
        }

        if(!this.validatePassAgain(passAgainInput.value)){
            this.setError(passAgainInput,'رمز عبور یکسان نیست')
            console.log('success')
            return
        }else{
            console.log('no')
            this.clearError(passAgainInput)
        }

        super.validateForm()
    }
    validateUsername(username) {
        return username.length >= 2;
    }
    validateLastname(userLastname) {
        return userLastname.length >= 2;
    }
    validatePassAgain(passAgain){
        const passwordInput = document.getElementById(this.userPass);
        return passAgain === passwordInput.value;
    
    }
}

