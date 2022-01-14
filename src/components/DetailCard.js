import { Card, CardImg } from "react-bootstrap";
import { Header } from "semantic-ui-react";


const DetailCard = props => {



    return (
        <Card style={{ height: 1050, width: 600, top: 10, borderWidth: 7, borderColor: "#D84B01", bordered: true, backgroundColor: "#FFD083", borderRadius: 12 }}>
            <CardImg src={props.strDrinkThumb} style={{ height: 400 }} variant="top"></CardImg>

            <Card.Title className="detailcard_title" style={{ textAlign: "center" }}>{props.strDrink}</Card.Title>
            <Card.Body >
                <Header>
                    <Card.Text className="ingredient">
                        <div className="ingredient_title">Ingredients :</div>
                        <div>{props.strMeasure1} {props.strIngredient1}</div>
                        <div>{props.strMeasure2}{props.strIngredient2}</div>
                        <div>{props.strMeasure3}{props.strIngredient3}</div>
                        <div>{props.strMeasure4}{props.strIngredient4}</div>
                        <div>{props.strMeasure5}{props.strIngredient5}</div>
                        <div>{props.strMeasure6}{props.strIngredient6}</div>
                        <div>{props.strMeasure7}{props.strIngredient7}</div>
                        <div>{props.strMeasure8}{props.strIngredient8}</div>
                        <div>{props.strMeasure9}{props.strIngredient9}</div>
                        <div>{props.strMeasure10}{props.strIngredient10}</div>
                        <div>{props.strMeasure11}{props.strIngredient11}</div>
                        <div>{props.strMeasure12}{props.strIngredient12}</div>
                        <div>{props.strMeasure13}{props.strIngredient13}</div>
                        <div>{props.strMeasure14}{props.strIngredient14}</div>
                        <div>{props.strMeasure15}{props.strIngredient15}</div>
                    </Card.Text>
                </Header>
                <Card.Footer >
                    <Card.Text className="instructions">
                        <div className="instructions_title"> Instructions :</div>
                        <div>{props.strInstructions}</div>
                    </Card.Text>
                </Card.Footer>
            </Card.Body>
        </Card>
    )

}

export default DetailCard;