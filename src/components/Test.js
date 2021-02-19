import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors, Field } from 'react-redux-form';

//functions for validation
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class ContactComponent extends Component {
    
    //to reflect the state in our component, we instantiate the constructor for our Contact Compo
    // constructor(props){
    //     super(props);

    //     /* we no longer need the state to be explicitly stored in our application
    //     because state will be managed by react-redux-form on our behalf*/

    //     // this.handleInputChange = this.handleInputChange.bind(this);
    //     // this.handleSubmit = this.handleSubmit.bind(this);
    //     // this.handleBlur = this.handleBlur.bind(this);
    // }

    //we also dont need handleInputChange & handleBlur bc its gg to be managed automatically by rrf on our behalf
    /*handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;  
        const name = target.name;
        this.setState({
            [name]: value
        });
    }*/

    handleSubmit = (values) => {
        console.log("Current State is:" + JSON.stringify(values));
        alert("Current State is:" + JSON.stringify(values));
    }
    // How does this work? whenever submit btn is clicked --> onSubmit attribute is tied to handleSubmit
    //onSubmit is found at <Form> tag
    //In order to make the handleSubmit of use, we need to BIND it in the constructor

    /*handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true}
        });
    }*/

    //validate function will ALSO be done by RRF
    /*validate(firstname, lastname, telnum, email) {
        const errors = {            //here we construct a javascript obj errors containing message corresponding to the 4 values
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
        };  
    //validations      
        if (this.state.touched.firstname && firstname.length < 3) //if firstname has been touched & fn length<3 then..
            errors.firstname = "First Name should be >= 3 characters";
        else if (this.state.touched.firstname && firstname.length > 10)
        errors.firstname = "First Name should be <= 10 characters";

        if (this.state.touched.lastname && lastname.length < 3) 
            errors.lastname = "Last Name should be >= 3 characters";
        else if (this.state.touched.lastname && lastname.length > 10)
        errors.lastname = "Last Name should be <= 10 characters";

        const reg = /^\d+$/;        //this regex means that the string of char shld be ALL numbers
        if (this.state.touched.telnum && !reg.test(telnum)) 
            errors.telnum = 'Tel. Number should contain only numbers';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Emails should contain an @ sign';
        return errors;
    }
    //then we invoke this within render() because everytime there's a chg in input fields, form will be rerendered
    //so that'll be appropriate time to check
    */

    render() {
        // const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to={`/home`}>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>We would love to hear from you! - Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        {/* implement form here */}
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group"> {/*a form group allows u to define a row here i.e. this is 1 row */}
                                
                                {/*So we create our first form element here: */}
                                {/* When we say md={2}, for md to XL screen this label will occupy 2 cols in this row */}
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                {/* label will be positioned to the left in the form group and then to the right of it we will 
                                position the input box to input firstname*/}
                                
                                <Col md={10}> {/*for MD-XL Screen,10 cols. Col in reactstrap = <div className="col-md-10"> of bootstrap */}
                                    <Control.text model=".firstname" 
                                        id="firstname" name="firstname" 
                                        className="form-control"
                                        placeholder="First Name" 
                                        validate={{
                                            required, 
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors 
                                        className="text-danger" //renders text in red
                                        model=".firstname"
                                        show="touched"          //will only show if the field is touched
                                        messages={{             //error msgs
                                            required: 'Required', //if required is true, we display the word 'Required'
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}             
                                    />
                                </Col>
                            </Row>

                       

                            
                         

                        

                            <Row className="form-group">                                
                            <Col md={{size:10, offset:2}}>
                                <Button type="submit" color="primary">Submit Feedback</Button>
                                </Col>
                            </Row>
                            {/* since this is tied to the state of the React Application, the submission of the Form should be handled within the React Application 
                            whenever anything is changed in any of these elements, that should be reflected by changing the state of the component to reflect whatever is in the box here
                            so, we implement 2 handlers to take care of handling this form.*/}
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    };
    
}

// export default Contact;

