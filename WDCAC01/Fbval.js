let email=document.getElementById("femail");
let nam=document.getElementById("fname");
let addr = document.getElementById("faddr");
let er = document.getElementsByClassName("er_or");
const regex1=/^([a-z0-9\.-]+)@(christuniversity+)\.(in{1,8})$/;
const regex2= /^([a-z0-9\.-]+)@(Christuniversity+)\.(in{1,8})(.[a-z]{1,8})$/;
const regname = /^\D*$/;

function valAll(){

    if(!regex1.test(email.value)){
        alert("Invalid email id");
    }
    else{
        if(!(nam.value.search(regname) == 0 && nam.value!='')){
            alert("Invalid name");
        }
        else{
            console.log("all are correct");
            document.getElementsByClassName("forReset")[0].action = 'https://christuniversity.in/';
        }
    }


}



email.onkeydown = ()=>{

   

   if(regex1.test(email.value)||regex2.test(email.value))
   {
     er[1].innerText="Your Email is Valid";
     er[1].style.color="lime";  
   }
   else{
       er[1].innerText="Invalid Email Id Please Enter email id Properly!";
       er[1].style.color="red";
   }}

nam.onkeydown = ()=>{

    
    let arr = nam.value.search(regname);
    console.log(arr);
    if(arr == 0 && nam.value!=''){
        er[0].innerText = "valid name";
        er[0].style.color = "lime";
    }
    else{
        er[0].innerText = "invalid name Please Choose another name!";
        er[0].style.color = "red";
    }
   }

   function resetme() {
    document.getElementsByClassName("forReset")[0].reset();
  }