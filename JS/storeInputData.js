
//Recherche des sélecteurs et attribution des valeurs
//const firstnameInput = document.querySelector('#firstnameInput');
//const lastnameInput = document.querySelector('#lastnameInput');
//const birhtdateInput = document.querySelector('#birthdateInput');
const piSelectionInput = document.querySelector('#input__piSelection');
const cniNumberInput = document.querySelector('#input__cniNumber');
const passeportNumberInput = document.querySelector('#input__passeportNumber');
const piDeliveryDateInput = document.querySelector('#input__piDeliveryDate');
const kbisDate = document.querySelector('#input__kbisDate');
const companyName = document.querySelector('#input__companyName');

//Stockage dans localStorage des valeurs saisies dans le formulaire
//document.getElementById("firstnameInput").addEventListener("focusout", storeInputData);
//document.getElementById("lastnameInput").addEventListener("focusout", storeInputData);
//document.getElementById("birthdateInput").addEventListener("focusout", storeInputData);
piSelectionInput.addEventListener("focusout", storeInputData);
cniNumberInput.addEventListener("focusout", storeInputData);
passeportNumberInput.addEventListener("focusout", storeInputData);
piDeliveryDateInput.addEventListener("focusout", storeInputData);
companyName.addEventListener("focusout", storeInputData);
kbisDate.addEventListener("focusout", storeInputData);

function storeInputData()
{
    //localStorage.setItem('firstname', firstnameInput.value);
    //localStorage.setItem('lastname', lastnameInput.value);
    //localStorage.setItem('birthdate', birhtdateInput.value);
    localStorage.setItem('piSelection', piSelectionInput.value);
    localStorage.setItem('cniNumber', cniNumberInput.value);
    localStorage.setItem('passeportNumber', passeportNumberInput.value);
    localStorage.setItem('piEditionDate', piDeliveryDateInput.value)
    localStorage.setItem('companyName', companyName.value)
    localStorage.setItem('kbisDate', kbisDate.value);

}