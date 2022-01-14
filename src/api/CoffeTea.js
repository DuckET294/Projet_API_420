import { useEffect, useState } from 'react';
import { Label, Container } from "semantic-ui-react";
import DisplayCard from "../components/DisplayCard"


export default function CoffeeTea() {


    const [coffee, setData] = useState([{}]);
    const axios = require('axios');

    useEffect(() => {
        function getShots() {
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Coffee / Tea')
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

    console.log(coffee);

    return (

        <Container>
            <div className='label'>
                <Label ribbon={true} style={{color:"#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold", textColor: "red" }} >Coffee / Tea</Label>
            </div>
            <div className='display_card'>
                {coffee.map((coffee, key) => (<DisplayCard key={key} {...coffee} />))}
            </div>
        </Container>

    )


};