const birthdateInput = document.querySelector("#birthdateInput");
birthdateInput.addEventListener("focusout", birthdateCheck);

let birthdateValueCheckStatus = false;

function birthdateCheck(aValue)

{
// ######### Gestion des formats de date #########

    /*Récupération de la date saisie dans l'input (format AAAAMMJJ séparé par des tirets)
    Dans certains cas le champ de date n'offre pas de calendrier
    Il faut traiter l'éventualité des séparateur "/" en entrée afin qu'ils soient traités et convertis en "-"
    Il faut traiter l'éventualité de l'inversion des valeurs AAAA et JJ 
    */
   
    //Date de naissance
    
   //Déclaration d'un tableau destiné à recevoir la date de naissance
   
   //On récupère la valeur du champ date quel que soit son formatage
   aValue = birthdateInput.value;

//    #### ça ça fonctionne !: ####
// let birthdateValueArray = aValue.split('-');
// birthdateValueArray.reverse();
// console.log("pate:" +"" + birthdateValueArray[0] + birthdateValueArray[1] + birthdateValueArray[2]);

   //Si la date de naissance n'est pas renseignée, le rappeler à l'utilsateur
   if(!aValue)
   {
    document.getElementById("birthdateInput").classList.add("clr__red");
   }
   else
   {
    document.getElementById("birthdateInput").classList.remove("clr__red");
    document.getElementById("birthdateInput").classList.add("clr__green");
   }

   /*
   remplissage du tableau en séparant les éléments de la date en prenant comme parametre le tiret qui est par 
   présent par défaut dans les champs de type 'date'
   puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)
   */

   /* 
   Quelquefois, le champ de type 'date' ne fonctionne pas sous certains navigateur (SAFARI),
   il faut alors filtrer ce qui est entré par l'utilisateur et voir comment le champ se comporte.
   */
   //Si l'utilisateur entre la date en séparant les élément par " - " :
   if (aValue.includes("-"))
   {

   /*
   On va quand même vérifier qu'il a bien commencé par le jour, si c'est un petit malin qui a mis
   l'année en premier on inverse les éléments AAAA et JJ
   */
        let birthdateValueArray = aValue.split("-");
        //console.log(birthdateValueArray2[0])
        if (birthdateValueArray[0] > 31)
        {
            birthdateValueArray.reverse();
        }
        localStorage.setItem('birthdate', birthdateValueArray[0] + birthdateValueArray[1]+ birthdateValueArray[2]);
        //console.log("valeur recueillie: " + "" + aValue + "/" + "valeur traitée :" + "" + birthdateValueArray[0] + birthdateValueArray[1]+ birthdateValueArray[2]);
   }
   /*
   //Si l'utilisateur entre la date en séparant les élément par " / " , il faut les remplacer par des " - " 
   */
   if (aValue.includes("/"))
   
   {
   //On entre les valeurs dans le tableau en gardant les " / "
   //On vérifie aussi que ce n'est pas le même petit malin qui essaie de mettre l'année en premier
        birthdateValueArray = birthdateInput.split("/");
        if (birthdateValueArray[0] > 31)
        {
            birthdateValueArray.reverse();
        }
   //On créé une boucle qui va permettre de parcourir le tableau
       for (let i = 0 ; i < birthdateValueArray.length ; i++)
       {
       var dtnaissOut = [];
       dtnaissOut = birthdateValueArray[i].replace("/", "-");
       birthdateValueArray = dtnaissOut;

       localStorage.setItem('birthdate', birthdateValueArray[0] + birthdateValueArray[1]+ birthdateValueArray[2]);
       }
   }
   
//    localStorage.setItem('birthdate', birhtdateInput);
   //Vérification de la mécanique dans la console
//    console.log(value + " " + "tableau dtnaiss: " + birthdateValueArray + " " + dtnaissOut);
}