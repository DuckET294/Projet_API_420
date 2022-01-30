import { useEffect, useState } from 'react';
import { Label, Container } from "semantic-ui-react";
import DisplayCard from '../components/DisplayCard';



/*
Ici est une fonction qui effectue un get
en utilisant axios et retourne les données
qu'on affiche ensuite dans un conteneur à
l'aide du components DisplayCard.
*/


export default function SoftDrinkSoda() {


    const [soft, setData] = useState([{}]);                      //Ici on déclare un useState
    const axios = require('axios');

    useEffect(() => {                                            //hook Effect appeler
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Soft Drink / Soda', {  //ici on fait un appel get à l'API
        })
            .then(function (response) {                          //ici on reçoit la réponse
                const donnes = response.data.drinks;             //ici je mets la valeur dans un const
                console.log(response);                           //On affiche ensuite la réponse dans la console
                setData(donnes);                                 //On met chaque valeurs récoltés dans le State
            })
            .catch(function (error) {                            //Ici on attrape une erreur si il y a
                console.log(error);                              //On affiche ensuite l'erreur dans la console           
            })
    }, []);                                                      //eslint-disable-line react-hooks/exhaustive-deps

    console.log(soft);                                           //On affiche la liste dans un JSON

    if (!soft) return null;                                      //si aucun punch est retourner on retourne null

    /*
 Ici on appel window qui représente la fenêtre Soft Drinks Soda
 et chaque fois qu'on va revenir sur la page elle s'affichera
 au début de l'écran
 */

    if (window !== undefined && window !== null) {
        window.scrollTo({                                        //ici c'est la fonction window.ScrollTo qui est déclaré
            top: 0,                                             //ici c'est l'endroit de l'écran ou on veut que l'écran monte
            behavior: 'instant'                                 //behavior est le type de remonter de l'écran donc ici ça remone instantanément
        });
    }




    return (

        <Container>
            <div className='label'>
                <Label ribbon={true} style={{ color: "#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold", textColor: "red" }} >Coffee / Tea</Label>
            </div>
            <div className='display_card'>
                {soft.map((soft, key) => (<DisplayCard key={key} {...soft} />))}
            </div>
        </Container>

    )


};