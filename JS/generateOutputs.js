const getGenerateButton = document.querySelector("#btn__generate");
getGenerateButton.addEventListener('click', generateOutputs);

function generateOutputs()
{
    
    const getFirstname = localStorage.getItem('firstname');
    const getLastameFirstLetter = localStorage.getItem('lastnameFirstLetter');
    const getLastameSecondLetter = localStorage.getItem('lastnameSecondLetter');

    const getBirthdate = localStorage.getItem('birthdate');
    
    if(getFirstname && getLastameFirstLetter && getBirthdate)
    {
        document.querySelector("#outCaz").classList.remove("clr__orange");
        document.querySelector("#outCazO").classList.remove("clr__orange");
        document.querySelector("#outDue").classList.remove("clr__orange");

        document.querySelector("#outCaz").classList.add("clr__green");
        document.querySelector("#outCazO").classList.add("clr__green");
        document.querySelector("#outDue").classList.add("clr__green");
        
        document.getElementById('outCaz').value = "CPR_" + getFirstname + "_" + getLastameFirstLetter + getLastameSecondLetter + "_" + getBirthdate + ".pdf";
        document.getElementById('outCazO').value = "CPR-O_" + getFirstname + "_" + getLastameFirstLetter + getLastameSecondLetter + "_" + getBirthdate + ".pdf";
        document.getElementById('outDue').value = "DUE_" + getFirstname + "_" + getLastameFirstLetter + getLastameSecondLetter + "_" + getBirthdate + ".pdf";
        

        document.querySelector("#btn__cpyCpr").style.display = "block";
        document.querySelector("#btn__cpyCprO").style.display = "block";
        document.querySelector("#btn__cpyDue").style.display = "block";
    
    }
    else
    {
        document.querySelector("#outCaz").classList.add("clr__orange");
        document.querySelector("#outCazO").classList.add("clr__orange");
        document.querySelector("#outDue").classList.add("clr__orange");
        
        document.getElementById('outCaz').value = "Veuillez corriger les champs en fond rouge";
        document.getElementById('outCazO').value = "Veuillez corriger les champs en fond rouge";
        document.getElementById('outDue').value = "Veuillez corriger les champs en fond rouge";
    
    }
// Fin de la fonction   
}