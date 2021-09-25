const firstName = document.getElementById("firstnameInput");
firstName.addEventListener("blur", firstnameCheck);

let firstnameValueCheckStatus = false;

function firstnameCheck(value)
{
    value = firstName.value.toUpperCase();

    if(!value)
    {
        document.querySelector("#firstnameInput").classList.add("clr__red");
        localStorage.removeItem('firstname');
        localStorage.setItem('firstnameValueCheckStatus', false);
    }
    else // comportement par défaut
    {
        document.querySelector("#firstnameInput").classList.remove("clr__red");
        document.querySelector("#firstnameInput").classList.add("clr__green");
        localStorage.setItem('firstname', value);
        localStorage.setItem('firstnameValueCheckStatus', true);
    }
    
    //console.log("firstname is:" + " " + value)
}