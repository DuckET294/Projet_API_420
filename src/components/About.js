import { Container } from "semantic-ui-react";




export default function Shots() {





return(

    <Container className="about"  style={{ height: 800, width: 800, margin: 20, borderStyle: "solid", borderWidth: 7, borderColor: "#D84B01", bordered: true, backgroundColor: "white", opacity: 0.8,  borderRadius: 12}}>
     <div  className="text"> 
     <div><h1>Projet API Groupe 420.</h1></div>
     <br/>   
     Mon sujet d'API sont les cocktails du site https://www.thecocktaildb.com.<br/><br/> 
    //Fonctionnalités//<br/><br/>
    ** Home **<br/>
    Aucune fonctionnalité --<br/><br/>
    ** Search **<br/>
    Recherche effectuer selon la valeur entré et il va y avoir résultat de la<br/>
    recherche. On peut ensuite cliquer sur info pour avoir les détails du <br/>
    cocktail en question.<br/><br/>
    ** Ingredients **<br/>
    Ici chaque ingrédients du fichier JSON sont affichés ici et si on clique<br/>
    </div>  
    </Container>


)



}