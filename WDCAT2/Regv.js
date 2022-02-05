/**
 * getting all required elements
 */
 
 const email = document.getElementById("GetEmail");
 const phNum = document.getElementById("GetPh");
 const nam = document.getElementById("GetName");
 const psw = document.getElementById("GetPsw");
 const psw = document.getElementById("GetAge");
 const er = document.getElementsByClassName("er_or");
 

 
 /**
  *  Regular Expressions
  */
const contnum = /^\d*$/;
 const regname = /^\D*$/;
 const regex1 = /^([a-z0-9\.-]+)@(+)(+)university.in\.([a-z]{1,8})$/;
 const regex2 = /^([a-z0-9\.-]+)@(+)\.([a-z]{1,8})(.[a-z]{1,8})$/;
 const regtendigit = /^\d{10}$/;
 const regpsw = /^([a-zA-Z])(?=.?[a-z])(?=.?[#?!@$%^&-\[\]\{\}<>`+_;:\=])(?=.?[a-zA-z0-9]).{6,}$/;
 

/**
 * name verification, error display in span
 */

 nam.onkeydown = (event) => {

    /**
     * The restriction of only entering the alphabets instead of numbers
     */

    if (nam.value.search(contnum) == 0){

        let key = event.keyCode;
        er[0].innerText = "don't enter numbers in this field";
        er[0].style.color = "red";
        console.log(key);
        return ((key >= 65 && key <= 90) || key == 8);
    }
    else {
        if (nam.value.search(regname) == 0 && nam.value != "") {
            er[0].innerText = "valid name";
            er[0].style.color = "lime";
          }
      }
  
  };
  
 /**
  * phone verification, error display in span
  */
  phNum.onkeydown = (event) => {

    if (nam.value.search(contnum) == 0){

        let key = event.keyCode;
        er[0].innerText = "did'nt enter numbers in this field";
        er[0].style.color = "red";
        console.log(key);
        return ((key >= 65 && key <= 90) || key == 8);
    }

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
   if (regex1.test(email.value) || regex2.test(email.value)) {
     er[2].innerText = "Your Email is Valid";
     er[2].style.color = "lime";
   } else {
     er[2].innerText = "Invalid Email Id";
     er[2].style.color = "red";
   }
 };
 


 

 /**
  * Email verification, error display in span
  */
 psw.onkeydown = () => {
   if (regpsw.test(psw.value)) {
     er[3].innerText = "valid password";
     er[3].style.color = "lime";
   } else {
     er[3].innerText = "invalid password";
     er[3].style.color = "red";
   }
 };
 
 
 
 
 /**
  * validate all the fields when submit is pressed and store the validated data into sessions or Local data based on remenber
  */
 
 function valAll() {
   console.log("validating all the fiels");
   if (!(nam.value.search(regname) == 0 && nam.value != "")) {
     alert("Invalid user name");
   } else {
     if (!regtendigit.test(phNum.value)) {
       alert("Invalid phone number");
     } else {
       if (!(regex1.test(email.value) || regex2.test(email.value))) {
         alert("Invalid Email id");
       } else {
         if (!regpsw.test(psw.value)) {
           alert("password creteria is not met");
         } else {
           if (remem.checked) {
             localStorage.setItem("userName", nam.value);
             localStorage.setItem("phoneNumber", phNum.value);
             localStorage.setItem("emailID", email.value);
             localStorage.setItem("password", psw.value);
             document.getElementById("tovalidate").action = "./Regis.html";
           } else {
             localStorage.removeItem("userName", nam.value);
             localStorage.removeItem("phoneNumber", phNum.value);
             localStorage.removeItem("emailID", email.value);
             localStorage.removeItem("password", psw.value);
 
             sessionStorage.setItem("userName", nam.value);
             sessionStorage.setItem("phoneNumber", phNum.value);
             sessionStorage.setItem("emailID", email.value);
             sessionStorage.setItem("password", psw.value);
 
             /* alert("Logging in"); */
           }
         }
       }
     }
   }
 }
 
 /**
  * function call for autofill
  */
 
 fillAll();
 
 /**
  *      Auto fill the fields using the local storage
  */
 function fillAll() {
   if (
     !localStorage.getItem("userName") == "" ||
     !localStorage.getItem("phoneNumber", phNum.value) == "" ||
     !localStorage.getItem("emailID", email.value) == "" ||
     !localStorage.getItem("password", psw.value) == ""
   ) {
     console.log("filled the form using Local storage");
     nam.value = localStorage.getItem("userName");
     phNum.value = localStorage.getItem("phoneNumber", phNum.value);
     email.value = localStorage.getItem("emailID", email.value);
     psw.value = localStorage.getItem("password", psw.value);
     remem.checked = true;
   }
 }