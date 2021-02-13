import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, 
    Button, Modal, ModalHeader, ModalBody, 
    Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        // By doing this here we're specifying that this.toggleNav will now become available as this.toggleNav
        //this JS variable toggleNav (left) will be pointing to this function that is bound to this(line17). so thats why we could specify the onClick as this.toggleNav
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen   //means whenever isNavOpen is false, then togglenav is true. opposites
        });
    }
    // whenever there is a method like that^ to make it available for use within jsx, 
    //we need to bind this in our code. so in constructor we type ^
   
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
    //this method receives the event as param,
        this.toggleModal();             //we'll close the modal at this point, once the form is submitted and then,
        alert("Username: " + this.username.value + "Password: " + this.password.value 
            + "Remember: " + this.remember.checked); 
        //using this alert to verify that the form has been submitted
        event.preventDefault();
        //We use preventDefault() to cancel event
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                {/* expand... means navbar will only show itself in its full form only for medium to large screen size 
                if you put expand="sm" means full form when its sm to xl screen */}
                    <div className="container">
                        {/* In order to toggle our collapse on and off we're going to add a button here: */}
                        <NavbarToggler onClick={this.toggleNav} /> {/*This toggler/button only appears for XS-S screens, for md-xl button hidden*/}
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        {/* Here we have 4 nav items and these will expand completely from a md-xl screen size.
                        For XS-S, we want to collapse this. so we make use of the collapse reactstrap component.*/}
                        <Collapse isOpen={this.state.isNavOpen} navbar> {/*isOpen is boolean attribute. if false, whatever inside the collapse will be hidden, if true then whatever inside the collapse will be shown*/}
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        {/* the nav-link class is from bootstrap which styles the link appropriately to fit into the navbar */}
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <Nav className="ml-auto" navbar>        {/*give this left margin, as much as possible*/}
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span>Login
                                    </Button>
                                </NavItem>
                            </Nav>

                        </Collapse>
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        {/* uncontrolled form in here */}
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username =input} />     
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password =input} />     
                                {/* since type is password, pw will not show and will be hidden */}
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                    innerRef={(input) => this.remember =input}/>
                                    <strong>Remember Me</strong>
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" value="submit" className="primary">Login</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>

            //<> </> is react fragment which allows us to group together a bunch of React elements and then return it
            //not all browsers recognise this <> so we can type <React.Fragment> instead
        )
    }
}

export default Header;
//now, we import the header component in the main component!