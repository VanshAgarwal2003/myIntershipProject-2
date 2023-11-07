let form=document.getElementById('myForm');


function validateEmail(mail)
{
   let expression=/\S+@\S+\.\S+/;
   return expression.test(mail);
}

function validate(event)
{
    let number=document.getElementById("unumber");
    let mail=document.getElementById("umail");
    let pass=document.getElementById("upass");

    let numberLength=number.value;
    const numericPattern = /^[0-9]{10}$/;

    if(!numericPattern.test(numberLength))
    {
        Swal.fire({
            icon: "error",
            title: "Sorry...",
            text: "Incorrect phone number!!"
          });                      //Dialog box with message
        event.preventDefault();    
       
        setTimeout(()=>{
            location.reload();
        },3000);                   //Reloading the page
    }
    else if(validateEmail(mail.value)===false)
    {
        Swal.fire({
            icon: "error",
            title: "Sorry...",
            text: "Incorrect email address!!"
          });                      //Dialog box with message
        event.preventDefault();    
       
        setTimeout(()=>{
            location.reload();
        },3000);                   //Reloading the page
    }
}

form.addEventListener("submit",validate);