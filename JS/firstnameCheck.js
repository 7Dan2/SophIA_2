const firstName = document.getElementById("firstnameInput");
firstName.addEventListener("blur", firstnameCheck);

let firstnameValueCheckStatus = false;

function firstnameCheck(value)
{
    value = firstName.value.toUpperCase();

    if(value)
    {
        document.querySelector("#firstnameInput").classList.add("green");
        localStorage.setItem('firstname', value);
        localStorage.setItem('firstnameValueCheckStatus', true);
    }
    else // comportement par défaut
    {
        document.querySelector("#firstnameInput").classList.remove("green");
        //document.querySelector("#firstnameInput").classList.add("red");
        localStorage.removeItem('firstname');
        localStorage.setItem('firstnameValueCheckStatus', false)
    }
    
    console.log("firstname is:" + " " + value)
}