import { Container } from "semantic-ui-react";


/*
Le code en bas affiche un conteneur avec un
texte à l'intérieur expliquant les fonctionnalités
*/

export default function About() {


    return (

        <Container className="about" style={{ height: 850, width: 800, margin: 20, borderStyle: "solid", borderWidth: 7, borderColor: "#D84B01", bordered: true, backgroundColor: "white", opacity: 0.8, borderRadius: 12 }}>
            <div className="text">
                <div className="titre">Projet API Groupe 420.</div>
                <br/>
                Mon sujet d'API sont les cocktails du site <a className="site" href="https://www.thecocktaildb.com">https://www.thecocktaildb.com</a><br /><br />
                <div className="titre">//Fonctionnalités//</div><br />
               <div className="titre">** Home **</div>
                Aucune fonctionnalité --<br /><br />
                <div className="titre">** Search **</div>
                Recherche effectuer selon la valeur entré et il va y avoir résultat de la<br />
                recherche. On peut ensuite cliquer sur info pour avoir les détails du <br />
                cocktail en question.<br /><br />
                <div className="titre">** Ingredients **</div>
                Ici chaque ingrédient du fichier JSON sont affichés et si l'on clique sur <br />
                un ingrédients tous les drinks ayant cet ingrédients va apparaitre.<br />
                <br /><br />
                <div className="titre">** Drinks **</div>
                Ici est menu déroulant pour chaque sorte de cocktails, boisson, bière etc.<br />
                Quand l’on clique sur un tous les cocktails de cette catégorie ils sont <br />
                affichés et ici aussi quand l’on clique sur un des cocktail <br />
                tous ses ingrédients et instructions seront affichées.<br />

            </div>
        </Container>


    )



}