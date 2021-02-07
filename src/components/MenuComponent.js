import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        //defining a state for the component
        //state stores property related to this component that we can make use of
        this.state = {
            selectedDish: null
            //null - means havent select any dish
        }
    }

    // onDishSelect method
    onDishSelect(dish) {
        //now we want to update for selectedDish to point here:
        //HOW TO CHANGE THE STATE OF YOUR COMPONENT
        //REMEMBER, WHEN WE WANT TO CHANGE THE STATE WE NEED TO USE THIS.SETSTATE FUNCTION CALL
        //cannot just type this.setstate=dish WRONG!!
        this.setState({ selectedDish:dish })
    }
    //when the dish is selected^, we also want to render the details of the dish
    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />  
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return(
                <div></div> //empty div, nothing will render
            )
        }
    }

    render() {
        //here we use the javascript map operator
        // const menu = this.state.dishes.map((dish) => {
        //previously, we have this.state={dishes[]}, but now we have dishes.js and its now props here instead of state
        
        const menu = this.props.dishes.map((dish) => {
            // array.map(function(),thisvalue)
            //iterating over every dish in the dishes array here
            //for every dish we return..
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* mt-5 means give a top margin of 5 units; m-1 means margin 1 unit all around */}
                    {/* inside this div we're going to construct the view for each
                    of the items in my dishes here */}
                    {/* Whenever we construct a list of items in React, every item requires a key attribute to be specified for it 
                    so this is where we're taking a list of items and then rendering them here. 
                    and so the key helps when React is rendering these items on the screen.
                    The key helps React to recognise each one of these elements and while it is and while it is updating the screen so the keys will enable it to identify each of those elements uniquely. */}
                    
                    {/* HOW TO RENDER THE LIST OF ITEMS IN THE MENU? check out git Component part 1 for Media tags*/}     
                    <Card onClick={() => this.onDishSelect(dish)}>
                    {/* means, on click of the card, we call this function and we pass the dish info as a parameter */}
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />  
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }); 

        return (            
        //inside here it returns what needs to be displayed on the UI by this component
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}
export default Menu;
// How to make use of this menu component? go App.js