const lastnameInput = document.getElementById("lastnameInput");
lastnameInput.addEventListener("blur", lastnameCheck);

let lastnameValue = "" ;
let lastnameValueCheckStatus = false;

function lastnameCheck(value)
{
    value = lastnameInput.value.toUpperCase();

    //On génére un tableau des lettres du nom
    let surnameValueArray = value.split("");

    //On cherche la présence du tiret dans ce tableau
    let isDashInSurname = surnameValueArray.includes("-"); //renvoie true ou false
    
    let dashInSurnamePosition, surnameFirstLetter, surnameSecondLetter;

    //Si true, on renvoie la position du tiret dans le tableau
    if (isDashInSurname == true)
    {
        dashInSurnamePosition = surnameValueArray.indexOf("-") ;
    
    //On recupère la première lettre du premier prenom
        surnameFirstLetter = value.charAt();
    
    //On récupère la première lettre du deuxième prenom en prenant comme index renvoyé par indexOf() 
        surnameSecondLetter = value.charAt(dashInSurnamePosition + 1);

        console.log(surnameFirstLetter + " " + surnameSecondLetter);
    }
    // else
    // {
    //     nameFirstLetter = value.charAt();
    //     nameSecondLetter = "";
    // }
    //Vérification de la mécanique dans la console
    // console.log(namesValueArray, isDashInName, dashInNamePosition , nameFirstLetter, nameSecondLetter);

    if (value)
    {
        document.querySelector("#lastnameInput").classList.add("green");
        localStorage.setItem('lastname', surnameFirstLetter + "-" + surnameSecondLetter);
        localStorage.setItem('lastnameValueCheckStatus', true)
    }
    else
    {
        document.querySelector("#lastnameInput").classList.remove("green");
        localStorage.setItem('lastnameValueCheckStatus', false);
        localStorage.removeItem('lastname');
    }
    
    console.log("lastname is:" + " " + surnameFirstLetter + "-" + surnameSecondLetter)

    // // Stockge de (ou des) lettres
    // localStorage.setItem('surname', surnameFirstLetter + "-" + surnameSecondLetter);

}

    
