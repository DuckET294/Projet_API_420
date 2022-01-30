import { Container } from "react-bootstrap";


export default function Home() {



    return (

        <Container className="home" style={{ height: 200, width: 800, marginTop: 250  ,borderStyle: "solid", borderWidth: 7, borderColor: "#D84B01", bordered: true, backgroundColor: "white", opacity: 0.8, borderRadius: 12 }}>
        <div className="home">
            <div className="titre">Bienvenue sur mon projet API</div>
        </div>
       </Container>

    );

}