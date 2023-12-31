jalaliDatepicker.startWatch({
  autoShow:true
});
//  ............. create time and date
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

// ......change Shamsi to Miladi.............................
document.querySelector("[data-jdp-miladi-input]").addEventListener("jdp:change", function(m) {
  let miladiInput = document.getElementById(this.getAttribute("data-jdp-miladi-input"));
  if (!this.value) {
    miladiInput.value = "";
    return;
}
let date = this.value.split("/");
miladiInput.value = jalali_to_gregorian(date[0], date[1], date[2]).join("/")
})

function jalali_to_gregorian(jy, jm, jd) {
  jy = Number(jy);
  jm = Number(jm);
  jd = Number(jd);
  var gy = (jy <= 979) ? 621 : 1600;
  jy -= (jy <= 979) ? 0 : 979;
  var days = (365 * jy) + ((parseInt(jy / 33)) * 8) + (parseInt(((jy % 33) + 3) / 4))
      + 78 + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
  gy += 400 * (parseInt(days / 146097));
  days %= 146097;
  if (days > 36524) {
      gy += 100 * (parseInt(--days / 36524));
      days %= 36524;
      if (days >= 365) days++;
  }
  gy += 4 * (parseInt((days) / 1461));
  days %= 1461;
  gy += parseInt((days - 1) / 365);
  if (days > 365) days = (days - 1) % 365;
  var gd = days + 1;
  var sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var gm
  for (gm = 0; gm < 13; gm++) {
      var v = sal_a[gm];
      if (gd <= v) break;
      gd -= v;
  }
  return [gy, gm, gd];
}



// .......................Validation register........................
const formRegister = document.getElementById('form-register')
const companyName = document.getElementById('companyname');
const titleRegsiter = document.getElementById('title');
const supervisor = document.getElementById('supervisor');
const category1= document.getElementById('category1');
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
    const companyNameValue = companyName.value.trim()
    const titleRegsiterValue = titleRegsiter.value.trim()
    const supervisorValue= supervisor.value.trim()
    const category1InputValue = category1.value.trim()
    const dateValue = date.value.trim()
    const timeValue = time.value.trim()
    const desceriptionValue= desceription.value.trim()
    let isValid = true;

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

    if(desceriptionValue.length <15){
      isValid = false;
      setErrors(desceription,'مقداری توضیحات درباره قرعه کشی اعلام کنید')
    }else{
      setSucces(desceription)
    }

    if (isValid) {
      // Only submit the form if all validations pass
      let account = {
        companyName: companyNameValue,
        titleRegsiter: titleRegsiterValue,
        category : [category1InputValue],
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
