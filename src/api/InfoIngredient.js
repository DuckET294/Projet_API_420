import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Label } from 'semantic-ui-react';
import DisplayCard from "../components/DisplayCard"


export default function InfoIngredient() {
  const [info, setInfo] = useState([]);
  const { strIngredient1 } = useParams();


  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${strIngredient1}`)
      .then((res) => res.json())
      .then((data) => setInfo(data.drinks));

  }, [strIngredient1]);


  console.log([info]);

  if (!info) return null;

  if (window !== undefined && window !== null) {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }

  return (
    <Container>
      <div className='label'>
        <Label ribbon={true} style={{ color: "#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold" }} > {info.length > 0 ? `${info.length} Résultat(s)` : undefined}</Label>
      </div>
      <div className='info_drink'>
        {info.map((info, key) => (<DisplayCard key={key} {...info} />))}
      </div>
    </Container>

  );
}

