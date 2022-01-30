import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../components/DetailCard';




/*
Ici est une fonction qui effectue un get
en utilisant axios et retourne les données
qu'on affiche ensuite dans un conteneur à
l'aide du components DisplayCard.
*/


export default function InfoDrink() {

  const [info, setInfo] = useState([]);                    //Ici on déclare un useState
  const { idDrink } = useParams();                         // On déclare axios pour pouvoir l'utiliser 


  useEffect(() => {                                        // hook Effect appeler
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`) //ici on fait un appel get à l'API avec fetch
      .then((res) => res.json())                           //On reçoit la réponse en JSON  
      .then((data) => setInfo(data.drinks[0]))             //On met dans le State
      .catch((erreur) => console.log(erreur));             //Ici on attrape une erreur si il y a et l'affiche dans la console
  }, [idDrink]);


  console.log([info]);                                     //On affiche la liste dans un JSON 

  if (!info) return null;                                  //si aucun punch est retourner on retourne null

  /*
Ici on appel window qui représente la fenêtre Beers
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


    <div className='info_drink'>

      {<DetailCard {...info} />}

    </div>


  );
}

