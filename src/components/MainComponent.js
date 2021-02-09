// this file will be acting as a seudo container container for this application
import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';              //has to be ../ we go one level up, then into the shared folder
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {              //define state here
      dishes: DISHES,           //js object (dishes): DISHES that we've just imported
    }
  }

  render() {

    const Homepage = () => {
      return(
        <Home />
      )
    }

    return (
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route exact path="/menu" component={ () => <Menu dishes={ this.state.dishes} />} />
            {/* When we type exact path, means its strictly menu, not menu/something else.  
            Because when we route to the dish detail component we will also start with /menu. 
            only when its menu alone then it'll route to ^ menu compo*/}

            {/* if its just a component which doesnt require any additional attributes to be passed 
            to it then we can simply specify the name of the component ie <Menu />
            but then this way, we wont be able to pass in any props to the menu component.
            if we want to pass in props to the menu component, then we have to pass that in as a function component. 
            - inline Function Component */}
            {/* () => <Menu dishes={ this.state.dishes} means we wont be able to pass the onClick method anymore, Menu will only receive dishes. */}
            
            <Redirect to="/home" /> 
            {/* Anything that doesnt match home or menu will be redirected to home */}
          </Switch>
        <Footer />
      </div>
    );
  }

}

export default Main;
