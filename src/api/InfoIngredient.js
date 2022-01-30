import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Label } from 'semantic-ui-react';
import DisplayCard from "../components/DisplayCard"



/*
Ici est une fonction qui effectue un get
en utilisant fetch et retourne les données
qu'on affiche ensuite dans un conteneur à
l'aide du components DisplayCard.
*/


export default function InfoIngredient() {

  const [info, setInfo] = useState([]);                 //Ici on déclare un useState
  const { strIngredient1 } = useParams();               // On déclare axios pour pouvoir l'utiliser 


  useEffect(() => {                                    // hook Effect appeler
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${strIngredient1}`) //ici on fait un appel get à l'API avec fetch
      .then((res) => res.json())                       //On reçoit la réponse en JSON                                
      .then((data) => setInfo(data.drinks))            //On met dans le State
      .catch((erreur) => console.log(erreur));         //Ici on attrape une erreur si il y a et l'affiche dans la console
  }, [strIngredient1]);


  console.log([info]);                                  //On affiche ensuite l'erreur dans la console    

  if (!info) return null;                               //si aucun punch est retourner on retourne null

  /*
Ici on appel window qui représente la fenêtre Info Ingrédients
et chaque fois qu'on va revenir sur la page elle s'affichera
au début de l'écran
*/


  if (window !== undefined && window !== null) {
    window.scrollTo({                                     //ici c'est la fonction window.ScrollTo qui est déclaré
      top: 0,                                            //ici c'est l'endroit de l'écran ou on veut que l'écran monte
      behavior: 'instant'                               //behavior est le type de remonter de l'écran donc ici ça remone instantanément
    });
  }

  /*
  Ici on affice l'appel de l'API dans un conteneur
  et on utilise le component DisplayCard pour afficher
  le contenu.
  */


  return (
    <Container>
      <div className='label'>
        <Label ribbon={true} style={{ color: "#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold" }} > {info.length > 0 ? `${info.length} Résultat(s)` : undefined}</Label>
      </div>
      <div className='info_drink'>
        {info.map((info, key) => (<DisplayCard key={key} {...info} />))}
      </div>
    </Container>

  );
}

