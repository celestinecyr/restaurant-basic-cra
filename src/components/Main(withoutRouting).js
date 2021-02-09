// this file will be acting as a seudo container container for this application
import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';              //has to be ../ we go one level up, then into the shared folder


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {              //define state here
      dishes: DISHES,           //js object (dishes): DISHES that we've just imported
      selectedDish: null        //null - means havent select any dish
    };
  }

  onDishSelect(dishId) {
      this.setState({ selectedDish: dishId});     //update selectedDish to point here, we change the state of component with setState
  }

  render() {
    return (
      <div>
      <Header />
        <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
        />       
        {/* When you click on any of the menu items the menu gets re-rendered with the new details of the selected dish */}

        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] }/>
        {/* this filter will operate on each dish in the dishes array, so we'll get access to each dish
        filter function gives the sub array of the dishes for which the sub-array contains the contrained part of the array for which id matches selected dish
        the arrow function here helps us to select out all those dishes for which the dishId matches the selected dish */}
        {/* after selecting dish, we pass that dish info to the DishdetailComponent */}
        <Footer />
      </div>
    );
  }
}

// export default Main;
