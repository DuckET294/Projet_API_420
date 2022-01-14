import { useEffect, useState } from 'react';
import { Label, Container } from 'semantic-ui-react';
import DisplayCard from "../components/DisplayCard"




export default function OrdinaryDrinks() {

  const [ordinary, setData] = useState([{}]);
  const axios = require('axios');


  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink', {
      params: {
      }
    })
      .then(function (response) {
        const donnes = response.data.drinks;
        console.log(response);
        setData(donnes);
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
        <Label ribbon={true} style={{ color: "#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold" }}>Ordinary Drinks</Label>
      </div>
      <div className='display_card'>
        {ordinary.map((ordDrink, key) => (<DisplayCard key={key} {...ordDrink} />))}
      </div>
    </Container>

  )

};