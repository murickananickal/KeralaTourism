let form3Example3cg = document.getElementById("form3Example3cg");
let form3Example4cg = document.getElementById("form3Example4cg");
let error = document.getElementById("error")
function validate(){
    // if(email.value=="" || pwd.value==""){
    //     alert("Fields cannot be emty");
    //     return false;
    // }
    // else{
    //     return true;
    //     //alert("Validation is proper")
    // }
    let regxp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regxp.test(form3Example3cg.value)){
        alert("Valid")
        //error.innerHTML = "Valid"
        //error.style.color="green"
        return true;
    }
    else{
        alert("Invalid")
       // error.innerHTML ="Invalid"
        //error.style.color="red"
        return false;

    }
     if(form3Example3cg.value.trim()==""){
         alert("Email cannot be empty")
         return false;

     }
     else if(form3Example4cg.value.trim()==""){
         alert("Password cannot be empty")
         return false;
     }
     else if(form3Example4cg.value.length<=5){
         alert("Password is too short")
         form3Example4cg.style.border="2px solid red"

     }
     else{
         return true;
     }

let form3Example3cg = document.getElementById("form3Example3cg");
let form3Example4cg = document.getElementById("form3Example4cg");
let error = document.getElementById("error")
function validate(){
    
    let regxp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regxp.test(form3Example3cg.value)){
        alert("Valid")
        //error.innerHTML = "Valid"
        //error.style.color="green"
        return true;
    }
    else{
        alert("Invalid")
       // error.innerHTML ="Invalid"
        //error.style.color="red"
        return false;

    }
     if(form3Example3cg.value.trim()==""){
         alert("Email cannot be empty")
         return false;

     }
     else if(form3Example4cg.value.trim()==""){
         alert("Password cannot be empty")
         return false;
     }
     else if(form3Example4cg.value.length<=5){
         alert("Password is too short")
         form3Example4cg.style.border="2px solid red"

     }
     else{
         return true;
     }

}
}