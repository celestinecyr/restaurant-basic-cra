import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
                </Navbar>
                <Jumbotron>
                    {/* The Jumbotron allows us to specify some information that can be displayed at the top in my header */}
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <div>
                                    {/* Content that goes into jumbotron */}
                                    <h1>Ristorante Con Fusion</h1>
                                    <p>This is the jumbotron which allows us to specify some info that can be displayed at the top of our page. We take inspiration from the world's best cuisines, and create a unique fusion experience. Our lip smacking creations will tickle your culinary senses!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>

            //<> </> is react fragment which allows us to group together a bunch of React elements and then return it
            //not all browsers recognise this <> so we can type <React.Fragment> instead
        )
    }
}

export default Header;
//now, we import the header component in the main component!