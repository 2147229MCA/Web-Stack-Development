/**
 * getting all required elements
 */

 const email = document.getElementById("GetEmail");
 const phNum = document.getElementById("GetPh");
 const nam = document.getElementById("GetName");
 const psw = document.getElementById("GetPsw");
 const age = document.getElementById("GetAge");
 const usernam = document.getElementById("GetUName");
 const er = document.getElementsByClassName("erorDis");
 
 /**
  *  Regular Expressions
  */
 const contnum = /^\d*$/;
 const regname = /^\D*$/;
 const regex1 = /^([a-z0-9\.-]+)@([a-zA-Z]+)\.in$/;
 const regtendigit = /^\d{10}$/;
 const regpsw =
   /^([a-zA-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-\[\]\{\}<>`+_;:\=])(?=.*?[a-zA-z0-9]).{6,}$/;
 
 
 
 /**
  * name verification, error display in span
  */
 
 nam.onkeydown = (event) => {
   /**
    * The restriction of only entering the alphabets instead of numbers
    */
 
   
     if (nam.value.search(regname) == 0 && nam.value != "") {
       er[0].innerText = "valid name";
       er[0].style.color = "lime";
     } else {
       er[0].innerText = "invalid name";
       er[0].style.color = "red";
     }
   };
 
 /**
  * phone verification, error display in span
  */
 phNum.onkeydown = () => {
   if (regtendigit.test(phNum.value)) {
     er[1].innerText = "valid phone number";
     er[1].style.color = "lime";
   } else {
     er[1].innerText = "invalid phone number";
     er[1].style.color = "red";
   }
 };
 
 /**
  * Email verification, error display in span
  */
 email.onkeydown = () => {
   if (regex1.test(email.value)) {
     er[3].innerText = "Your Email is Valid";
     er[3].style.color = "lime";
   } else {
     er[3].innerText = "Invalid Email Id";
     er[3].style.color = "red";
   }
 };
 
 /**
  * Age verification, error display in span
  */
 age.onkeydown = () => {
   // above 0 to 100 age can be
   if (age.value > 0 && age.value <= 100) {
     er[4].innerText = "valid age";
     er[4].style.color = "lime";
   } else {
     er[4].innerText = "invalid age";
     er[4].style.color = "red";
   }
 };
 
 /**
  *  usernam verification, error display in span
  */
 usernam.onkeydown = (event) => {
   if (usernam.value.search(contnum) == 0) {
     let key = event.keyCode;
     er[5].innerText = "don't enter numbers in this field";
     er[5].style.color = "red";
     return (key >= 65 && key <= 90) || key == 8;
   } 
   else {
     if (usernam.value.search(regname) == 0 && usernam.value != "") {
         
     // converting 1st char to caspital letter
       usernam.value = usernam.value.charAt(0).toUpperCase() + usernam.value.substring(1);
       er[5].innerText = "valid user name";
       er[5].style.color = "lime";
     } else {
       er[5].innerText = "invalid user name";
       er[5].style.color = "red";
     }
   }
 };
 
 
 /**
  * password verification, error display in span
  */
  psw.onkeydown = () => {
     if (regpsw.test(psw.value)) {
       er[2].innerText = "valid password";
       er[2].style.color = "lime";
     } else {
       er[2].innerText = "invalid password";
       er[2].style.color = "red";
     }
   };
   
 
 /**
  * validate all the fields when submit is pressed and store the validated data into sessions or Local data based on remenber
  */
 
 function valAll() {
   console.log("validating all the fiels");
   if (!(nam.value.search(regname) == 0 && nam.value != "")) {
     alert("Invalid name");
   } 
   else{
     if (!(usernam.value.search(regname) == 0 && usernam.value != "")){
         alert("Invalid user name");
     }
   else {
     if (!regtendigit.test(phNum.value)) {
       alert("Invalid phone number");
     } else {
       if (!regex1.test(email.value)) {
         alert("Invalid Email id");
       } else {
         if (!regpsw.test(psw.value)) {
           alert("password creteria is not met");
         } else {
             
 
             /**
              * Storing emial, name, user name anf phone in cookies
              */
             document.cookies = "name="+nam.value+";"
              +"email="+email.value+";"
              +"phone="+phone.value+";"
              +"username="+usernam.value+";"
              +" expires=Thu, 10 Feb 2022 12:00:00 UTC";
 
              /**
               * storing phone number and emial in local storage
               */
             localStorage.setItem("phoneNumber", phNum.value);
             localStorage.setItem("emailID", email.value);
           
         }
       }
     }
   }
 }
 }