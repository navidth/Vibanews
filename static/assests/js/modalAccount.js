let accountPerson =false;
function btnAccount(){
    console.log('hi')
    let btnAccount = document.getElementById('btn-account');
    let overlayAccount = document.getElementById("overlayAccount");
    if (accountPerson){
     overlayAccount.style.height='100%';
     accountPerson=false;
    }else{
        overlayAccount.style.height='0%';
        accountPerson=true;
    }

}