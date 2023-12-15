jalaliDatepicker.startWatch({
});
let listDates = document.querySelectorAll("input[data-jdp]");
for(i=0; i<listDates.length;i++){
  listDates[i].addEventListener('focus', function(){
   let defaults = {
    date:true,
    time:false,
    persianDigits : true,
    minDate:'today'
   }
   if(this.hasAttribute("data-jdp-option-1")){
    jalaliDatepicker.updateOptions({
      date :false,
      time:true,
      persianDigits:true
    })
   }else{
    jalaliDatepicker.updateOptions(defaults);
  }
  })
}
// .......................Validation register........................
const formRegister = document.getElementById('form-register')
const userNameId = document.getElementById('username-lastname');
const phoneSign = document.getElementById('phonenumber');
const companyName = document.getElementById('companyname');
const titleRegsiter = document.getElementById('title');
const supervisor = document.getElementById('supervisor');
const category1= document.getElementById('category1');
const category2= document.getElementById('category2');
const date= document.getElementById('date-start');
const time = document.getElementById('time-start');
const desceription =document.getElementById('desceription');


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
function isValidImageType(type) {
  let validTypes = ['image/jpeg', 'image/png', 'image/gif'];
  return validTypes.includes(type);
}

const validateInputs = ()=> {
    const userNameIdValue = userNameId.value.trim()
    const phoneSignValue = phoneSign.value.trim()
    const companyNameValue = companyName.value.trim()
    const titleRegsiterValue = titleRegsiter.value.trim()
    const supervisorValue= supervisor.value.trim()
    const category1InputValue = category1.value.trim()
    const category2InputValue = category2.value.trim()
    const dateValue = date.value.trim()
    const timeValue = time.value.trim()
    const desceriptionValue= desceription.value.trim()
    let isValid = true;

    if(userNameIdValue === ''){
      isValid = false;  
      setErrors(userNameId, 'فیلد اجباری است')
    }else{
        setSucces(userNameId)
    }
    if(phoneSignValue === ''){
      isValid = false;  
      setErrors(phoneSign, 'شماره تلفن اجباری است ')
    }else if (!/^09[0-9]+$/.test(phoneSignValue)) {
      isValid = false;  
      setErrors(phoneSign, 'شماره تلفن باید فقط شامل اعداد باشد و با 0 و 9 شروع شود');
    }else if(phoneSignValue.length !== 11){
      isValid = false;  
      setErrors(phoneSign, 'شماره تلفن باید شامل 11 عدد باشد');
    }
    else{
        setSucces(phoneSign)
    }
    if(companyNameValue === ''){
      isValid = false;  
      setErrors(companyName,'نام شرکت خود را ثبت کنید');
    }else{ 
        setSucces(companyName)
    }
    if(titleRegsiterValue === ''){
      isValid = false;  
      setErrors(titleRegsiter,'موضوع قرعه کشی اجباری است');
    }else{
        setSucces(titleRegsiter)
    }

    if(category1InputValue === ''){
      isValid = false;   
      setErrors(category1,'یک دسته بندی انتخاب کنید')
    }else{
      setSucces(category1)
    }

    if(category2InputValue === ''){
      isValid = false;   
      setErrors(category2,'یک دسته بندی انتخاب کنید')
    }else{
      setSucces(category2)
    }

    if(dateValue === ''){
      isValid = false; 
      setErrors(date,'تاریخ و زمان قرعه کشی را مشخص کنید')
    }else{
      setSucces(date)
    }
    if(timeValue === ''){
      isValid = false; 
      setErrors(time,'تاریخ و زمان قرعه کشی را مشخص کنید')
    }else{
      setSucces(time)
    }

    if(desceriptionValue.length <50){
      isValid = false;
      setErrors(desceription,'مقداری توضیحات درباره قرعه کشی اعلام کنید')
    }else{
      setSucces(desceription)
    }

    if (isValid) {
      // Only submit the form if all validations pass
      let account = {
        name: userNameIdValue,
        phone: phoneSignValue,
        companyName: companyNameValue,
        titleRegsiter: titleRegsiterValue,
        category : [category1InputValue,category2InputValue],
        date : [dateValue, timeValue],
        desceription: desceriptionValue
      };
      console.log('ثبت قرعه کشی جدید:', account);
  
      // Submit the form programmatically
      formRegister.submit();
    }
}
formRegister.addEventListener('submit',function(e){
  e.preventDefault();
  validateInputs();
})
