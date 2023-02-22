



 function mostrarEmail()
 {

    let email;
    let mesage;
    let age;

   email=document.querySelector("#email").value
   mesage = document.querySelector("#mesage").value
   age = document.querySelector("#age").value

    validateForm(email);

  if(validateForm!=true)
  {
    alert("su mail es " +""+ email + " " + "y su mensaje es " + mesage + ". " + "Su edad es " + age + ".");
  }
  else
  {
    if(validateForm!=false)
    alert("Complete los datos devuelta")

  }
    
    
  }

 

 

 function validateForm(email) {
  email = document.forms["myForm"]["emailform"].value;
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  
  
}







 



