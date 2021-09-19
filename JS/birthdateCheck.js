const birtdateInput = document.querySelector("#birthdateInput");
birthdateInput.addEventListener("focusout", birthdateCheck);

let birthdateValue = [] ;
let birthdateValueCheckStatus = false;

function birthdateCheck(value)
{




// ######### Gestion des formats de date #########

    /*Récupération de la date saisie dans l'input (format AAAAMMJJ séparé par des tirets)
    Dans certains cas le champ de date n'offre pas de calendrier
    Il faut traiter l'éventualité des séparateur "/" en entrée afin qu'ils soient traités et convertis en "-"
    Il faut traiter l'éventualité de l'inversion des valeurs AAAA et JJ 
    */
   
    //Date de naissance
    
   //Déclaration d'un tableau destiné à recevoir la date de naissance
//    let dtNaissArray = [];

   //On récupère la valeur du champ date quel que soit son formatage
    value = birtdateInput.value;

   //Si la date de naissance n'est pas renseignée, le rappeler à l'utilsateur
   
   
   if (value == ""){
    //    alert ("Vous devez renseigner votre date de naissance");
       document.getElementById("birthdateInput").classList.add("red");
   }
   else if (value != ""){
       document.getElementById("birthdateInput").classList.add("green");
       //document.getElementById("birthdateInput").style.color="white";
   }
//    else {
//        document.getElementById("dtNaiss").style.background="white";
//    }
   
   /*
   remplissage du tableau en séparant les éléments de la date en prenant comme parametre le tiret qui est par 
   présent par défaut dans les champs de type 'date'
   puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)
   */

   /* 
   Quelquefois, le champ de type 'date' ne fonctionne pas sous certains navigateur,
   il faut alors filtrer ce qui est entré par l'utilisateur et voir comment le champ se comporte.
   */
   //Si l'utilisateur entre la date en séparant les élément par " - " :
   if (value.includes("-"))
   {
   /*
   On va quand même vérifier qu'il a bien commencé par le jour, si c'est un petit malin qui a mis
   l'année en premier on inverse les éléments AAAA et JJ
   */
        birthdateValue = value.split("-");
        if (birthdateValue[0] > 31)
        {
            birthdateValue.reverse();
        }
        localStorage.setItem('birthdateForOut', birthdateValue);
   }
   /*
   //Si l'utilisateur entre la date en séparant les élément par " / " , il faut les remplacer par des " - " 
   */
   if (value.includes("/"))
   {
   //On entre les valeurs dans le tableau en gardant les " / "
   //On vérifie aussi que ce n'est pas le même petit malin qui essaie de mettre l'année en premier
        birthdateValue = value.split("/");
        if (birthdateValue[0] > 31)
        {
            birthdateValue.reverse();
        }
   //On créé une boucle qui va permettre de parcourir le tableau
       for (let i = 0 ; i < birthdateValue.length ; i++)
       {
       var dtnaissOut = [];
       dtnaissOut = birthdateValue[i].replace("/", "-");
       //var pos = value.indexOf('/');
      //var dtnaiss1 = dtnaiss.splice(pos, 2);
       //var dtnaiss2 = dtnaiss.splice(pos, 5);
       }
   }
   
   //Vérification de la mécanique dans la console
   console.log(value + "tableau dtnaiss: " + birthdateValue + " " + dtnaissOut);
}