
<script>


    // Programme du jeu de 2048

    import {onMount} from "svelte"; 
    //import {canvasElement} from "./types"


    


    /**@var canevas Canevas dans lequel on dessine la grille de jeu*/
    let canevas;
    


    onMount(() =>{
                canevas = createCanvas(); // Créer le canevas
                console.log("canevas :", canevas);
            });
    

    /**@function createCanvas Crée un nouvel élément canvas et l'ajoute au document*/
    function createCanvas(){
            console.log("Création du canevas...");
            canevas = document.createElement("canvas"); // Créer un nouvel élément canvas et l'affecter à la variable canevas
            canevas.id = "gridCanvas"; // ID du canevas
            canevas.width = 400; // Longueur du canevas en pixels
            canevas.height = 400; // Largeur du canevas en pixels
            //document.body.appendChild(canevas); // Ajouter le canevas au corps du document


            console.log("Canevas créé !");7

            return canevas;    
    }
            

        
    

    

    /**@var grille Liste représentant la grille de jeu*/
    let grille = [[0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]] 

    

    
    /**@function getCanvas Identifie ou le canevas, et le retourne*/

    function getCanvas(){
        if(!canevas){ // Si la variable canevas est nulle
            onMount(() => {
                canevas = createCanvas();

            })
        }
        return canevas;

        

        

    }              

    /**@function genererNombre Génère un nombre (2 ou 4) en utilisant une probabilité en pourcentage. Si ce pourcentage est supérieur ou égal à 67, un 4 est généré, sinon un 2.*/
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

    //canevas = getCanvas(); // Obtenir le canevas du document ou le créer s'il n'existe pas
    console.log("canevas :", canevas);
</script>


<title>Jeu de 2048</title>

<h1>Bienvenue sur le jeu de 2048 !</h1>
<p>Hello World !</p>
<p>Le but du jeu est d'associer des tuiles dont le nombre est équivalent dans une grille afin d'obtenir une tuile avec le nombre 2048. Bonne partie !</p>

<canvas id="gridCanvas">
    {#each grille as ligne} <!--Pour chaque ligne de la grille-->

    <p>{ligne}</p>
    

{/each}

</canvas>


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

