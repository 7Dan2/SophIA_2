const selectElementFromList = document.querySelector('#piOriginInput');

selectElementFromList.addEventListener('change', (event) => {

    var optionChoice = event.target.value;

    // const inputValue = document.querySelector('#numPi');

    if ( optionChoice == "cni" )
    {
        document.querySelector('ciNumber').style.display = "block" ;
        document.querySelector('passNumber').style.display = "none" ;
    }
    if ( optionChoice == "passeport" )
    {
        document.querySelector('passNumber').style.display = "block" ;
        document.querySelector('ciNumber').style.display = "none" ;
    }

})