//Menu Functional Component
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

//Functional Component of Card (view)
function RenderMenuItem({ dish, onClick }) {
    return(       //returns the view
        <Card>
            <Link to={`/menu/${dish.id}`} >
            {/* for every specific dish, that corresponding dish ID value is being evaluated here
             and will become eg /menu/42
             Remember to use back quotes not forward quote */}
                <CardImg width="100%" object src={dish.image} alt={dish.name} />  
                <CardImgOverlay body className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
// then, go to MainComponent and add DishWithId function


//Another way of implementing a Functional Component
    const Menu = (props) => {
        // const menu = this.props.dishes.map((dish) => {
        //since props is coming in as the parameter, we remove the word 'this'
        const menu = props.dishes.map((dish) => {

            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />
                    {/* the RenderMenuItem takes in the 2 para dish and onclick
                    the onClick was sent in by the MainComponent that we are parsing in to the render menu compo as the function here */}
                </div>
            );
        }); 

        return (            
        //inside here it returns what needs to be displayed on the UI by this component
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to={`/home`}>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active><Link to={`/menu`}>Menu</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;
// How to make use of this menu component? go App.js