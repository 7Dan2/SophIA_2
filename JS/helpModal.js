const getTheHelpButton = document.querySelector("#helpButton");

getTheHelpButton.addEventListener('click', e =>
{
    
    const getTheModal = document.querySelector(".helpArea");
    const getTheCloseModal = document.querySelector("#closeModalButton");

    

    if(getTheCloseModal)
    {
        getTheModal.classList.remove("showModal");
    }
    else
    {
        getTheModal.classList.add("showModal");
    }
    
}) 