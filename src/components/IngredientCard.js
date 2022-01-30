import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


/*
Ici est une fonction pour afficher 
chaque ingrédients dans des "Card".
*/


const IngredientCard = props => {


    return (
        <Card style={{ height: 65, width: 200, margin: 10, top: 10, borderWidth: 7, borderColor: "#D84B01", bordered: true, backgroundColor: "#ffe9c4", borderRadius: 12, textAlign: "center" }}>
            <Card.Title ><Link to={`/infoingredient/${props.strIngredient1}`} style={{ textDecoration: "underline", color: "#02666d", fontSize: 20, fontWeight: "bold", top: 10 }}>{props.strIngredient1}</Link></Card.Title>
        </Card>
    )

}

export default IngredientCard;