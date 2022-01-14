import { useEffect, useState } from 'react';
import { Label, Container } from "semantic-ui-react";
import DisplayCard from "../components/DisplayCard"


export default function HomeMadeLiqueur() {


    const [homemade, setData] = useState([{}]);
    const axios = require('axios');

    useEffect(() => {
        function getShots() {
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Homemade Liqueur')
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

    console.log(homemade);

    return (

        <Container>
            <div className='label'>
                <Label ribbon={true} style={{color:"#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold", textColor: "red" }} >Punch / Party Drink</Label>
            </div>
            <div className='display_card'>
                {homemade.map((homemade, key) => (<DisplayCard key={key} {...homemade} />))}
            </div>
        </Container>

    )


};