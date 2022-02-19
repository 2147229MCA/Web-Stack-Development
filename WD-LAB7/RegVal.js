const email = document.getElementById("GetEmail");
const phNum = document.getElementById("GetPh");
const nam = document.getElementById("GetName");
const psw = document.getElementById("GetPsw");
const age = document.getElementById("GetAge");
const usernam = document.getElementById("GetUName");
const er = document.getElementsByClassName("erorDis");


const contnum = /^\d*$/;
const regname = /^\D*$/;
const regex1 = /^([a-z0-9\.-]+)@([a-z]+)\.in$/;
const regtendigit = /^\d{11}$/;
const regpsw =
  /^([a-zA-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-\[\]\{\}<>`+_;:\=])(?=.*?[a-zA-z0-9]).{8,}$/;




nam.onkeydown = (event) => {
  
  
    if (nam.value.search(regname) == 0 && nam.value != "") {
      er[0].innerText = "valid name";
      er[0].style.color = "lime";
    } else {
      er[0].innerText = "invalid name For example use John Smith";
      er[0].style.color = "red";
    }
  };


phNum.onkeydown = () => {
  if (regtendigit.test(phNum.value)) {
    er[1].innerText = "valid phone number";
    er[1].style.color = "lime";
  } else {
    er[1].innerText = "invalid phone number Try 3974939999";
    er[1].style.color = "red";
  }
};


email.onkeydown = () => {
  if (regex1.test(email.value)) {
    er[3].innerText = "Your Email is Valid";
    er[3].style.color = "lime";
  } else {
    er[3].innerText = "Invalid Email Id for example use Codec@codesatr.in";
    er[3].style.color = "red";
  }
};


age.onkeydown = () => {
  
  if (age.value > 0 && age.value <= 100) {
    er[4].innerText = "valid age";
    er[4].style.color = "lime";
  } else {
    er[4].innerText = "invalid age try giving 18";
    er[4].style.color = "red";
  }
};


usernam.onkeydown = (event) => {
  if (usernam.value.search(contnum) == 0) {
    let key = event.keyCode;
    er[5].innerText = "don't enter numbers in this field";
    er[5].style.color = "red";
    return (key >= 65 && key <= 90) || key == 8;
  } 
  else {
    if (usernam.value.search(regname) == 0 && usernam.value != "") {
        
    
      usernam.value = usernam.value.charAt(0).toUpperCase() + usernam.value.substring(1);
      er[5].innerText = "valid user name";
      er[5].style.color = "lime";
    } else {
      er[5].innerText = "invalid user name ";
      er[5].style.color = "red";
    }
  }
};



 psw.onkeydown = () => {
    if (regpsw.test(psw.value)) {
      er[2].innerText = "valid password";
      er[2].style.color = "lime";
    } else {
      er[2].innerText = "invalid password For example Try Qqwe@#@77su";
      er[2].style.color = "red";
    }
  };
  



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
            

            
            document.cookies = "name="+nam.value+";"
             +"email="+email.value+";"
             +"phone="+phone.value+";"
             +"username="+usernam.value+";"
             +" expires=Thu, 10 Feb 2022 12:00:00 UTC";

            
            localStorage.setItem("phoneNumber", phNum.value);
            localStorage.setItem("emailID", email.value);
          
        }
      }
    }
  }
}
}