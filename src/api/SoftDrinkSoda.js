import { useEffect, useState } from 'react';
import { Label, Container } from "semantic-ui-react";
import DisplayCard from '../components/DisplayCard';


export default function SoftDrinkSoda() {


    const [soft, setData] = useState([{}]);
    const axios = require('axios');

    useEffect(() => {
        function getShots() {
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Soft Drink / Soda')
                .then(response => {
                    const donnes = response.data.drinks;
                    console.log(response);
                    setData(donnes);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {

                });
        };
        getShots();

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (window !== undefined && window !== null) {
        window.scrollTo({
           top: 0,
           behavior: 'instant'
        });
     }


    console.log(soft);

    return (

        <Container>
            <div className='label'>
                <Label ribbon={true} style={{color:"#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold", textColor: "red" }} >Coffee / Tea</Label>
            </div>
            <div className='display_card'>
                {soft.map((soft, key) => (<DisplayCard key={key} {...soft} />))}
            </div>
        </Container>

    )


};