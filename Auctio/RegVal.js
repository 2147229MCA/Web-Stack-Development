const email = document.getElementById("GetEmail");
const phNum = document.getElementById("GetPh");
const nam = document.getElementById("GetName");
const psw = document.getElementById("GetPsw");
const regname = /^\D*$/;
const regex1 = /^([a-z0-9\.-]+)@(auctio+)\.([a-z]{1,8})$/;
const regex2 = /^([a-z0-9\.-]+)@(Auctio+)\.([a-z]{1,8})(.[a-z]{1,8})$/;
const regtendigit = /^\d{10}$/;
const regpsw = /^([a-zA-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-\[\]\{\}<>`+_;:\=])(?=.*?[a-zA-z0-9]).{6,}$/;
let cname = "";
let cpsw = "";
let cphone = "";
let cemail = "";
 
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
            document.cookies = "username="+nam.value+";"
            +"email="+email.value+";"
            +"phone="+phNum.value+";"
            +"password="+psw.value+";"
            +" expires=Fri, 18 Feb 2022 12:00:00 UTC";

            cname = document.cookies.split(";")[0].split("=")[1];
            cemail = document.cookies.split(";")[1].split("=")[1];
            cphone = document.cookies.split(";")[2].split("=")[1];
            cpsw = document.cookies.split(";")[3].split("=")[1];

            
            if (confirm("Press ok if the details are correct\n"
            +"User name"+" : "+cname+"\n"
            +"Email"+" : "+cemail+"\n"
            +"Phone"+" : "+cphone)) {
                console.log(cname);
                document.getElementById("tovalidate").action = "./index.html";
                
              } else {
                location.reload();
      
}
              
         
        }
      }
    }
  }
}