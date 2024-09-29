
<script>
    // Programme du jeu de 2048

    /**@var grille Liste représentant la grille de jeu*/
    let grille = [[0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]] 

    
    /**@function genererNombre Génère un nombre (2 ou 4) en utilisant une probabilité*/
    function genererNombre(){
        /**@var probabilite4 Probabilité q'un 4 apparaise, entre 0 et 100*/
        const probabilite4 = Math.floor(Math.random()*101);  
        console.log(probabilite4 + "% de chances qu'un 4 soit généré");

        if(probabilite4 >= 67){ // S'il y a 67 % de chances ou plus de générer un 4
            return 4; // Retourner un 4

        } else { // Sinon
            return 2; // Retourner un 2
        }

    }

    let nombre = genererNombre();
    console.log("Nombre généré:", nombre);
</script>


<title>Jeu de 2048</title>

<h1>Bienvenue sur le jeu de 2048 !</h1>
<p>Hello World !</p>
<p>Le but du jeu est d'associer des tuiles dont le nombre est équivalent dans une grille afin d'obtenir une tuile avec le nombre 2048. Bonne partie !</p>

<style>
    /* Importer la police Roboto depuis Google Fonts*/
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'); 


    :global(body){
        /*Attributs du corps de la page */
        transition: 2s;
        background-color: yellow;

        animation: backGroundColorChange 4s ease-in-out forwards;
    }


    @keyframes backGroundColorChange{
        /* Animation pour le changement de couleur de l'élément body */
        0%{background-color: transparent;}
        100%{background-color: yellow;}
    }
    h1{
        /*Attributs des éléments h1*/
        font-style: italic;
        font-family: "Roboto";
    }

    p{
        /*Attrbuts des éléments p*/
        font-size: 25px;
        font-family: "Roboto";
    }

    
    
</style>

