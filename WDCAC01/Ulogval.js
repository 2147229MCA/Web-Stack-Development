let email=document.getElementById("getEm");
let nam=document.getElementById("getNam");
let psw = document.getElementById("getPsw");
let er = document.getElementsByClassName("has-error");

const regex1=/^([a-z0-9\.-]+)@(christuniversity+)\.(in{1,8})$/;
const regex2= /^([a-z0-9\.-]+)@(Christuniversity+)\.(in{1,8})(.[a-z]{1,8})$/;
const regname = /^\D*$/;
const regpsw = /^([a-zA-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-\[\]\{\}<>`+_;:\=])(?=.*?[0-9]).{6,}$/;


function valAll(){
    if(!regex1.test(email.value)){
        alert("Invalid Email id");
    }
    else{
        if(!(nam.value.search(regname) == 0 && nam.value!='')){
            alert("Invalid user name, Please enter acording to the correct format");
        }
        else{
            if(!regpsw.test(psw.value)){
                alert("Invalid password format, try again");
            }
            else{

                document.getElementsByClassName("tovalidate")[0].action = "./Fbform.xhtml"
            }
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
       er[1].innerText="Invalid Email Id Please enter proper email ID";
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
        er[0].innerText = "invalid name Please enter name again";
        er[0].style.color = "red";
    }
   }



   psw.onkeydown = ()=>{

    let ts = psw.value.search(regpsw);
    if(regpsw.test(psw.value)){
        er[2].innerText = "valid password";
        er[2].style.color = "lime";
    }
    else{
        er[2].innerText = "invalid password Password is incorrect";
        er[2].style.color = "red";
    }
   }