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

