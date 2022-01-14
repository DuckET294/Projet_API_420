import { useEffect, useState } from 'react';
import { Container, Label } from 'semantic-ui-react';
import DisplayCard from "../components/DisplayCard"




export default function Cocktails() {

  const [cocktails, setData] = useState([{}]);
  const axios = require('axios');


  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', {
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
        <Label ribbon={true} style={{color:"#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold" }}>Cocktails</Label>
      </div>
      <div className='display_card'>
        {cocktails.map((cktail, key) => (<DisplayCard key={key} {...cktail} />))}
      </div>
    </Container>

  )

};
