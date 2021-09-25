const lastnameInput = document.getElementById("lastnameInput");
lastnameInput.addEventListener("blur", lastnameCheck);

let lastnameValue = "" ;
let lastnameValueCheckStatus = false;

function lastnameCheck(value)
{
    value = lastnameInput.value.toUpperCase();

    //On génére un tableau des lettres du nom
    let lastnameValueArray = value.split("");

    //On cherche la présence du tiret dans ce tableau
    let isDashInLastname = lastnameValueArray.includes("-"); //renvoie true ou false
    
    let dashInLastnamePosition, lastnameFirstLetter, lastnameSecondLetter;

    //Si true, on renvoie la position du tiret dans le tableau
    if (isDashInLastname == true)
    {
        dashInLastnamePosition = lastnameValueArray.indexOf("-") ;
    
    //On recupère la première lettre du premier prenom
        lastnameFirstLetter = value.charAt();
    
    //On récupère la première lettre du deuxième prenom en prenant comme index renvoyé par indexOf() 
        lastnameSecondLetter = value.charAt(dashInLastnamePosition + 1);

        // console.log(lastnameFirstLetter + " " + lastnameSecondLetter);
    }
    else
    {
        lastnameFirstLetter = value.charAt();
        lastnameSecondLetter = "";
    }
    //Vérification de la mécanique dans la console
        // console.log(lastnameValueArray, isDashInLastname, dashInLastnamePosition);

    if (!value)
    {
        document.querySelector("#lastnameInput").classList.add("clr__red");
        localStorage.removeItem('lastnameFirstLetter');
        localStorage.removeItem('lastnameSecondLetter');
        localStorage.setItem('lastnameValueCheckStatus', false);
    }
    else
    {
        document.querySelector("#lastnameInput").classList.remove("clr__red");
        document.querySelector("#lastnameInput").classList.add("clr__green");
        localStorage.setItem('lastnameFirstLetter', lastnameFirstLetter);
        localStorage.setItem('lastnameSecondLetter', lastnameSecondLetter);
        localStorage.setItem('lastnameValueCheckStatus', true);
    }
    
    //console.log("lastname is:" + " " + lastnameFirstLetter + "-" + lastnameSecondLetter);

//Fin de la fonction
}