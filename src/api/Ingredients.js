import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Label } from 'semantic-ui-react';
import IngredientCard from '../components/IngredientCard';




export default function Ingredients() {

    const axios = require('axios');
    const [ordinary, setData] = useState([{}]);


    useEffect(() => {

        axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list', {
            params: {
            }
        })
            .then(function (response) {
                const donnes = response.data.drinks;
                setData(donnes);
                console.log(ordinary);


            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });



    }, []);  // eslint-disable-line react-hooks/exhaustive-deps


    console.log();


    if (window !== undefined && window !== null) {
      window.scrollTo({
         top: 0,
         behavior: 'instant'
      });
   }

    return (

        <Container>
            <div className='label'>
                <Label ribbon={true} style={{color:"#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold"}}>Ingredients</Label>
            </div>
            <div className='display_card'>
                {ordinary.map((ordinary, key) => (<IngredientCard key={key} {...ordinary} />))}
            </div>
        </Container>


    )

};
