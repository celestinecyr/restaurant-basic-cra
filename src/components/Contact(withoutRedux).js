import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

//Since we need to store the state of the form in the state of our react component,
//we need to turn Contact Compo into a class compo to be able to support controlled forms
class Contact extends Component {
    
    //to reflect the state in our component, we instantiate the constructor for our Contact Compo
    constructor(props){
        super(props);
        //define the state which reflects the info from the form that we create
        this.state={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,           //boolean
            contactType: 'Tel.',    //This will be used for a select form control
            message: '',
            touched: {              //touched helps to keep track whether a particular field has been touched or not
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            //the reason for tracking this is that if the form value has not even been touched by the user, the user has made no changes to that form value, then we should not be validating it at all
            //only after user makes first change to any input boxes, then we can validate tht box
            //so here we r tracking the state for each of the input boxes & whenever input is filled it chgs to true
            //we handle that with the handleBlur() method
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        //this event^ will carry whichever input that has been changed
        //we make sure the handleInputChange method is invoked upon any change to any input value in our form
        //When this is invoked, then we will retrieve the target input from the event that has been parsed in
        const target = event.target;
        //after that, we need to check to see:
        //if target type is checkbox then we have to change or retrieve the value from the target checked
        //ELSE we have to retrieve the value (like firstname,email..) from target value here 
        const value = target.type === 'checkbox' ? target.checked : target.value;  
        //and we'll retrieve the name of the particular input that has been changed from target name
        const name = target.name;

        //remember to make sure that the name you give to input box will the same as what you use for the properties in the state
        this.setState({
            [name]: value
            //this way, any changes in our form will immediately get reflected into the state
        });
        //How do we tie this handleInputChange mtd to the inputs? we add onChange={this.handleInputChange}
    }
    //Without handleinputChange, when we try to type in the input boxes nothing will appear.
    //Because, when we change anyth in input box its tired to the state of our controlling compo

    handleSubmit(event) {
        console.log("Current State is:" + JSON.stringify(this.state));
        alert("Current State is:" + JSON.stringify(this.state));
        event.preventtDefault();
    }
    // How does this work? whenever submit btn is clicked --> onSubmit attribute is tied to handleSubmit
    //onSubmit is found at <Form> tag
    //In order to make the handleSubmit of use, we need to BIND it in the constructor

    handleBlur = (field) => (evt) => {
    //the handleBlur will indicate which particular field has been modified
    //and it'll also receive the corresponding evt in here
        this.setState({
            touched: { ...this.state.touched, [field]: true}
            //means whatever input box that has been modified im gg to set tht to true
        });
    }

    //validate function
    validate(firstname, lastname, telnum, email) {
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

        //for telephone number we wanna make sure that they're only numbers!
        const reg = /^\d+$/;        //this regex means that the string of char shld be ALL numbers
        if (this.state.touched.telnum && !reg.test(telnum)) 
        //if telnum is touched and is not reg.test & the reg.test is a built in mthd for the regex
        //reg.test says if you give it a string there, it will return a Boolean value which performs the search and indicates 
        //whether the pattern exists in the string or not
            errors.telnum = 'Tel. Number should contain only numbers';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
        //checking each of the character in email field to see if there is at least 1 @ character in email or not
        //if dont have then not valid email
            errors.email = 'Emails should contain an @ sign';

        return errors;
    }
    //then we invoke this within render() because everytime there's a chg in input fields, form will be rerendered
    //so that'll be appropriate time to chekc

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row> {/*a form group allows u to define a row here i.e. this is 1 row */}
                                
                                {/*So we create our first form element here: */}
                                {/* When we say md={2}, for md to XL screen this label will occupy 2 cols in this row */}
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                {/* label will be positioned to the left in the form group and then to the right of it we will 
                                position the input box to input firstname*/}
                                
                                <Col md={10}> {/*for MD-XL Screen,10 cols. Col in reactstrap = <div className="col-md-10"> of bootstrap */}
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname} 
                                    valid={errors.firstname === ''} invalid={errors.firstname !== ''}
                                    onBlur={this.handleBlur('firstname')} onChange={this.handleInputChange}/>
                                    {/* we give the name="firstname" so that it'll tie itself to the <Label for=""> --> we type htmlFor so that it wont be confused with javascript's for
                                    value : we will tie this to the controlled component's state. By doing so, this becomes a controlled form so any changes here will be reflected in the React Component's state */}
                                    {/* valid={errors.firstname === ''} means --> this field is a valid field if errors is empty. else...  */}
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname} 
                                        valid={errors.lastname === ''} invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')} onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" placeholder="Tel. Number" value={this.state.telnum} 
                                        valid={errors.telnum === ''} invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')} onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" placeholder="Email" value={this.state.email} 
                                         valid={errors.email === ''} invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')} onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>             {/* Inside this formgrp we create a checkbox control */}
                                <Col md={{size:6, offset: 2}}>
                                {/* Here, we can even specify the number of columns by typing: {size:6} as a js object inside the { } 
                                and we can also specify the offset for that --> means occupy 6 columns and offset 2 col */}
                                {/* Dont have label here but need to push all of these to the right within the form so thats what we r doing here */}
                                
                                {/* Within this first col we'll implment a formgrp check for a check box */}
        
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange}/> {' '}             {/* We tie its property value checked to this.state.agree */}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset: 1}}>
                                    {/* In the 2nd col here we create a SELECT CONTROL */}
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="6" value={this.state.message} onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                <Button type="submit" color="primary">Submit Feedback</Button>
                                </Col>
                            </FormGroup>
                            {/* since this is tied to the state of the React Application, the submission of the Form should be handled within the React Application 
                            whenever anything is changed in any of these elements, that should be reflected by changing the state of the component to reflect whatever is in the box here
                            so, we implement 2 handlers to take care of handling this form.*/}
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
    
}

// export default Contact;