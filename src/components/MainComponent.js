// this file will be acting as a seudo container container for this application
import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';              //has to be ../ we go one level up, then into the shared folder
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {              //define state here
      dishes: DISHES,           //js object (dishes): DISHES that we've just imported
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }

  render() {

    const HomePage = () => {
      return(
        //we're going to pass in 3 props for the home component - comments, promo, leaders
        <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
        //currently we are in the parent page component.(MainComponent)  
        //Now to pass it to the home page, --> this.state.dishes
        //After passing it to home component --> inside the home component you call the 
        //properties as this.props.dishes

        //what kind of filter are we applying?
        // all those (dishes) for which dish.featured
        //because feature is true/false --> boolean
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]} 
          leader={this.state.leaders.filter((leader) => leader.featured)[0]} 
        />
      )
    }

    //the route will pass in 3 props here: but we only look at match first
    const DishWithId = ({match}) => {
      return (
        //for dish detail, what are the properties that i need to pass in??
        <DishDetail 
          dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          // convert the string into int
          //the match object (in the argument) has the params, would contain the dish ID as one of the params 
          //& base 10 integer + [0] because the filter will return an array
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))[0]}
        />
      );
    }

    return (
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={ () => <Menu dishes={ this.state.dishes } />} />
            {/* When we type exact path, means its strictly menu, not menu/something else.  
            Because when we route to the dish detail component we will also start with /menu. 
            only when its menu alone then it'll route to ^ menu compo*/}

            {/* if its just a component which doesnt require any additional attributes to be passed 
            to it then we can simply specify the name of the component ie <Menu />
            but then this way, we wont be able to pass in any props to the menu component.
            if we want to pass in props to the menu component, then we have to pass that in as a function component. 
            - inline Function Component */}
            {/* () => <Menu dishes={ this.state.dishes} means we wont be able to pass the onClick method anymore, Menu will only receive dishes. */}

            {/* in line 75 we are using route params, so at the DishWithId func we put match!!:) */}
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact} />    {/*we're gonna use contact but not passing in any props*/}
            <Redirect to="/home" /> 
            {/* Anything that doesnt match home or menu will be redirected to home */}

            {/* Take note that /menu is above /menu/dishId */}
          </Switch>
        <Footer />
      </div>
    );
  }

}

export default Main;
