import { Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';


/*
Ici est une fonction pour afficher chaque 
cocktails dans des "Card".
*/

const DisplayCard = props => {

    return (
        <Card style={{ height: 360, width: 200, margin: 10, top: 10, borderStyle: "solid", borderWidth: 7, borderColor: "#D84B01", bordered: true, backgroundColor: "#ffe9c4", borderRadius: 12 }}>
            <CardImg src={props.strDrinkThumb}></CardImg>
            <Card.Title className="displaycard_title"  >{props.strDrink}</Card.Title>
            <Card.Body>
                <Card.Footer>
                    <Card.Text>
                        <Link className='link' to={`/infodrink/${props.idDrink}`}>More Infos</Link>
                    </Card.Text>
                </Card.Footer>
            </Card.Body>
        </Card>
    )

}
export default DisplayCard;