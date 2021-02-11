// An outline for creating a form:

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class FormNotes extends Component {
    
    //to reflect the state in our component, we instantiate the constructor for our Contact Compo
    constructor(props){
        super(props);
        //define the state which reflects the info from the form that we create
        this.state={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,           
            contactType: 'Tel.',    
            message: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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


    render() {
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
                        <Input type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleInputChange}/>
                        {/* we give the name="firstname" so that it'll tie itself to the <Label for=""> --> we type htmlFor so that 
                        it wont be confused with javascript's for
                        value : we will tie this to the controlled component's state. By doing so, this becomes a controlled form 
                        so any changes here will be reflected in the React Component's state */}
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="lastname" md={2}>Last Name</Label>
                    <Col md={10}>
                        <Input type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleInputChange}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                    <Col md={10}>
                        <Input type="tel" id="telnum" name="telnum" placeholder="Tel. Number" value={this.state.telnum} onChange={this.handleInputChange}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="email" md={2}>Email</Label>
                    <Col md={10}>
                        <Input type="email" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}/>
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
                        <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}/>
                            <option>Tel.</option>
                            <option>Email</option>
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
    }

export default FormNotes;