
//Recherche des sélecteurs et attribution des valeurs
//const firstnameInput = document.querySelector('#firstnameInput');
//const lastnameInput = document.querySelector('#lastnameInput');
// const birhtdateInput = document.querySelector('#birthdateInput');
const piOriginInput = document.querySelector('#piOriginInput');
const piNumberInput = document.querySelector('#piNumberInput');
const piDeliveryDateInput = document.querySelector('#piEditionDateInput');

//Stockage dans localStorage des valeurs saisies dans le formulaire
//document.getElementById("firstnameInput").addEventListener("focusout", storeInputData);
//document.getElementById("lastnameInput").addEventListener("focusout", storeInputData);
// document.getElementById("birthdateInput").addEventListener("focusout", storeInputData);
document.getElementById("piOriginInput").addEventListener("focusout", storeInputData);
document.getElementById("piNumberInput").addEventListener("focusout", storeInputData);
document.getElementById("piEditionDateInput").addEventListener("focusout", storeInputData);

function storeInputData()
{
    //localStorage.setItem('firstname', firstnameInput.value);
    //localStorage.setItem('lastname', lastnameInput.value);
    // localStorage.setItem('birthdate', birhtdateInput.value);
    localStorage.setItem('piOrigin', piOriginInput.value)
    localStorage.setItem('piNumber', piNumberInput.value);
    localStorage.setItem('piEditionDate', piDeliveryDateInput.value)
}