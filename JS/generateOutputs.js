

function generateOutputs()
{
    
    var getFirstname = localStorage.getItem('firstname');
    var getLastame = localStorage.getItem('lastname');
    var getBirthdate = localStorage.getItem('birthdateForOut')
    
    if(getFirstname && getLastame && getBirthdate)
    {
        document.querySelector("#outCaz").classList.add("green");
        document.querySelector("#outCazO").classList.add("green");
        
        document.getElementById('outCaz').innerHTML = "CAZ_" + getFirstname + "_" + getLastame + "_" + getBirthdate + ".pdf"
        document.getElementById('outCazO').innerHTML = "CAZ-O_" + getFirstname + "_" + getLastame + "_" + getBirthdate + ".pdf"
    }
    else
    {
        document.querySelector("#outCaz").classList.add("orange");
        document.querySelector("#outCazO").classList.add("green");
        
        document.getElementById('outCaz').innerHTML = "Veuillez corriger les champs en fond rouge";
        document.getElementById('outCazO').innerHTML = "Veuillez corriger les champs en fond rouge";
    }
    
}


