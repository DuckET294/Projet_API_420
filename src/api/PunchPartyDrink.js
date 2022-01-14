import { useEffect, useState } from 'react';
import { Label, Container } from "semantic-ui-react";
import DisplayCard from "../components/DisplayCard"


export default function PunchPartyDrink() {


    const [punch, setData] = useState([{}]);
    const axios = require('axios');

    useEffect(() => {
        function getShots() {
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Punch / Party Drink')
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

    console.log(punch);

    if (window !== undefined && window !== null) {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }

    return (

        <Container>
            <div className='label'>
                <Label ribbon={true} style={{ color: "#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold" }} >Punch / Party Drink</Label>
            </div>
            <div className='display_card'>
                {punch.map((punch, key) => (<DisplayCard key={key} {...punch} />))}
            </div>
        </Container>

    )


};