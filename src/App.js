
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Home from "./components/Home";
import About from './components/About';
import Search from "./api/Search";
import Cocktails from './api/Cocktails';
import Beers from './api/Beers'
import Shots from './api/Shots';
import InfoDrink from './api/InfoDrink';
import { Header } from "semantic-ui-react";
import logo from '../src/icone_palmier.png';
import { Fragment } from "react";
import OrdinaryDrinks from './api/OrdinaryDrinks';
import Ingredients from './api/Ingredients';
import InfoIngredient from "./api/InfoIngredient";
import PunchPartyDrink from "./api/PunchPartyDrink";
import CoffeeTea from "./api/CoffeTea";
import SoftDrinkSoda from "./api/SoftDrinkSoda";
import HomeMadeLiqueur from "./api/HomeMadeLiqueur"

/*
Le code en bas est un fragment contenant 
un menu avec un menu déroulant ainsi que
les routes pour acceder pour chaque page.
*/

export default function App() {

  return (

    <Fragment>
      <Router>

        <Navbar collapseOnSelect expand="xl" bg="blue" variant="dark" className="navbar">

          <Container>

            <LinkContainer to="/">
              <Navbar.Brand ><Header ><h1 className="navbar-brand">Tropic<img src={logo} alt="Logo" className="App-logo" /> cktails</h1></Header></Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

                <LinkContainer to="/">
                  <Nav.Link >Home
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/search">
                  <Nav.Link >Search
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/ingredients">
                  <Nav.Link >Ingredients
                  </Nav.Link>
                </LinkContainer>

                <NavDropdown className='navbar-dropdown' title="Drinks" id="collasible-nav-dropdown">

                <LinkContainer to="/beers">
                    <NavDropdown.Item >Beers
                      <Nav.Link >
                      </Nav.Link>
                    </NavDropdown.Item>
                  </LinkContainer>


                  <LinkContainer to="/cocktails">
                    <NavDropdown.Item className='navbar-dropdown'>Cocktails
                      <Nav.Link >
                      </Nav.Link>
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/coffeetea">
                    <NavDropdown.Item >Coffee / Tea
                      <Nav.Link >
                      </Nav.Link>
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/homemadeliqueur">
                    <NavDropdown.Item >Homemade Liqueur
                      <Nav.Link >
                      </Nav.Link>
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/ordinarydrinks">
                    <NavDropdown.Item >Ordinary Drinks
                      <Nav.Link >
                      </Nav.Link>
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/punchpartydrink">
                    <NavDropdown.Item >Punch / Party Drink
                      <Nav.Link >
                      </Nav.Link>
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/shots">
                    <NavDropdown.Item >Shots
                      <Nav.Link >
                      </Nav.Link>
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/softdrinksoda">
                    <NavDropdown.Item >Soft Drink / Soda
                      <Nav.Link >
                      </Nav.Link>
                    </NavDropdown.Item>
                  </LinkContainer>

                </NavDropdown>

                <LinkContainer to="/about">
                      <Nav.Link >About
                      </Nav.Link>
                  </LinkContainer>
                  
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/ingredients" component={Ingredients} />
          <Route exact path="/search" component={Search} />
          <Route path="/beers" component={Beers} />
          <Route path="/cocktails" component={Cocktails} />
          <Route path="/coffeetea" component={CoffeeTea} />
          <Route path="/homemadeliqueur" component={HomeMadeLiqueur} />
          <Route path="/infodrink/:idDrink" component={InfoDrink} />
          <Route path="/infoingredient/:strIngredient1" component={InfoIngredient} />
          <Route path="/ordinarydrinks" component={OrdinaryDrinks} />
          <Route path="/punchpartydrink" component={PunchPartyDrink} />
          <Route path="/shots" component={Shots} />
          <Route path="/softdrinksoda" component={SoftDrinkSoda} />
          
        </Switch>
      </Router>

    </Fragment>




  );
}
