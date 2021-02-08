//Menu Functional Component
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

//Functional Component of Card (view)
function RenderMenuItem({ dish, onClick }) {
    return(                 //returns the view
        <Card onClick={() => onClick(dish.id)}>
        {/* not this.props.onClick, but just onClick since its coming in as parameter */}
            <CardImg width="100%" object src={dish.image} alt={dish.name} />  
            <CardImgOverlay body className="ml-5">
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

//Another way of implementing a Functional Component
    const Menu = (props) => {
        // const menu = this.props.dishes.map((dish) => {
        //since props is coming in as the parameter, we remove the word 'this'
        const menu = props.dishes.map((dish) => {

            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick}/>
                    {/* the RenderMenuItem takes in the 2 para dish and onclick
                    the onClick was sent in by the MainComponent that we are parsing in to the render menu compo as the function here */}
                </div>
            );
        }); 

        return (            
        //inside here it returns what needs to be displayed on the UI by this component
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;
// How to make use of this menu component? go App.js