import { useEffect, useState } from 'react';
import { Container, Label } from "semantic-ui-react";
import DisplayCard from "../components/DisplayCard";



export default function Beers() {

  const [beers, setData] = useState([{}]);
  const axios = require('axios');

  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer')
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

  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  console.log(beers);

  if (window !== undefined && window !== null) {
    window.scrollTo({
       top: 0,
       behavior: 'instant'
    });
 }

  return (


    <Container>
      <div className='label'>
        <Label ribbon={true} style={{color:"#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold" }}>Beers</Label>
      </div>
      <div className='display_card'>
        {beers.map((beer, key) => (<DisplayCard key={key} {...beer} />))}
      </div>
    </Container>

  )

};
