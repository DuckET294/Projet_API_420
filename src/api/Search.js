import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Input, Label } from "semantic-ui-react";
import DisplayCard from "../components/DisplayCard";


export default function Search(data) {

    const [input, setInput] = useState('');
    const [resultDrinks, setDrinks] = useState([]);


    const ChercherDrink = () => {


        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
            .then((response) => response.json())
            .then((data) => setDrinks(data.drinks))
            .catch((erreur) => console.log(erreur));

    }

    if (window !== undefined && window !== null) {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }


    return (

        <Container >
            <div className='label'>
                <Label ribbon={true} style={{ color: "#02666d", background: "#ffe9c4", fontSize: 24, fontWeight: "bold" }} > {resultDrinks.length > 0 ? `${resultDrinks.length} Résultat(s)` : undefined}</Label>
                <div>
                <Input className="input" type="text" value={input} placeholder="Search for drinks" onChange={(e) => setInput(e.target.value)} ></Input>
                <Button className="button" onClick={ChercherDrink}>Rechercher</Button>
            </div>
            </div>
            <div className='display_card'>
                {resultDrinks.map(drink => (<DisplayCard key={drink.idDrink} {...drink} />))}
            </div>
        </Container>
    );

}