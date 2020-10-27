// variables du juste prix
let justePrix = 0;
let prix = 0;
let nbTentative = 0;

// Récupération des noeud DOM
const sortie = document.querySelector("div#sortie>h2");
const entreInput = document.querySelector('div#entre>input');
const entreButton = document.querySelector('div#entre>button');
const sortieTentative = document.querySelector('#tentative'); 

// initiliser la partie
const init = () => {
    // Math est une bibliothéque native de JS
    // Math.floor arrondir au nombre inférieur
    // Math.random génére un nombre aléatoire de 0 à 1 avec beaucoup de décimales
    justePrix = Math.floor(Math.random()*101);
    nbTentative = 0;
    afficherTentative();
}

// deviner le juste prix

const deviner = () =>{
    prix = parseInt(entreInput.value);
    if(nbTentative < 10){
        if(prix === justePrix){
            changerSortie('Vous avez trouvé le juste prix !');
            finirPartie();
        }else if( prix > justePrix ){
                changerSortie("C'est moins");
        }else{
            changerSortie("C'est plus");
        }
    }else{
        changerSortie("Perdu ! Le nombre de tentatives est dépassé !");
        finirPartie();
    }
    nbTentative++;
    afficherTentative();
}

const changerSortie = (texte) => {
    sortie.textContent = texte;
}

const afficherTentative = () => {
    sortieTentative.textContent = `Nombre de tentatives: ${nbTentative}`;
}

const finirPartie = () => {
    entreButton.setAttribute("disabled","true");
    // exécute une fonction aprés un laps de temps défini
    setTimeout(
        // fonction a lancer
        ()=>{
        window.location.reload();
        },
    // temps avant lancement en ms
    3000);
}
// lancement de la fonction init au chargement de la page
window.addEventListener('load', init);
// lancement de la focniton deviner au clic du bouton
entreButton.addEventListener('click', deviner);
