import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Input, Label } from "semantic-ui-react";
import DisplayCard from "../components/DisplayCard";




/*
Ici est une fonction qui effectue un get
en utilisant fetch et retourne les données
qu'on affiche ensuite dans un conteneur à
l'aide du components DisplayCard.
*/


export default function Search() {

    const [input, setInput] = useState('');                     //Ici on déclare un useState pour l'entrer de la recherche de l'utilisateur
    const [resultDrinks, setDrinks] = useState([]);             //Ici on déclare un useState


    const ChercherDrink = () => {                               //On déclare la fonction ChercherDrink

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`) //ici on fait un appel API de type Fetch
            .then((response) => response.json())                //On reçoit la réponse en JSON 
            .then((data) => setDrinks(data.drinks))             //On met dans le State
            .catch((erreur) => console.log(erreur));            //Ici on attrape une erreur si il y a et l'affiche dans la console
    }


     /*
    Ici on appel window qui représente la fenêtre Search
    et chaque fois qu'on va revenir sur la page elle s'affichera
    au début de l'écran
    */
    

    if (window !== undefined && window !== null) { 
        window.scrollTo({                                     //ici c'est la fonction window.ScrollTo qui est déclaré
          top: 0,                                            //ici c'est l'endroit de l'écran ou on veut que l'écran monte
          behavior: 'instant'                               //behavior est le type de remonter de l'écran donc ici ça remone instantanément
        });
      }

    

    return (

        <Container >
            <div className='label'>
                <Label ribbon={true} style={{ color: "#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold" }} > {resultDrinks.length > 0 ? `${resultDrinks.length} Résultat(s)` : undefined}</Label>
                <div>
                    <Input className="input" type="text" value={input} placeholder="Search for drinks" onChange={(e) => setInput(e.target.value)} ></Input>
                    <Button className="button" onClick={ChercherDrink}>Rechercher</Button>
                </div>
            </div>
            <div className='display_card'>
                {resultDrinks.map(drink => (<DisplayCard key={drink.idDrink} {...drink} />))}
            </div>
        </Container>
    );

}