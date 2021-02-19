import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem, 
        Button, Modal, ModalBody, ModalHeader, Row, Col, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
// import { render } from 'react-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

//validation
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

    class CommentForm extends Component {
            
        constructor(props) {
            super(props);
            this.state = {
                isModalOpen: false
            }
        }

        toggleModal = () => {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
            
        handleSubmit = (values) => {
            this.toggleModal();
            console.log("Current State is:" + JSON.stringify(values));
            alert("Current State is:" + JSON.stringify(values));
        }

        render() {
            return(
                <div>
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-comment-alt fa-lg"></span>Submit Comment
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Content</ModalHeader>
                        <ModalBody>
                            {/* LocalForm here: */}
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={12}>Rating</Label>
                                    <Col md={12}>
                                        <Control.Select model=".rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.Select>
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlFor="username" md={12}>Your Name</Label>
                                    <Col md={12}>
                                        <Control.Text model=".username" name="username" className="form-control" placeholder="your name"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors 
                                            className="text-danger" //renders text in red
                                            model=".username"
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
                                    <Label htmlFor="comment" md={12}>Comment</Label>
                                    <Col md={12}>
                                        <Control.Text model=".comment" name="comment" className="form-control" placeholder="comment"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                    </Col>
                                </Row>  

                                <Row className="form-group">
                                    <Col md={12}>
                                        <Button type="submit" color="primary">
                                            Submit Comment
                                        </Button>
                                    </Col>
                                </Row> 
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
    }

    // function RenderComments({ comments }) {
    //     if (comments != null)
    //       return (
    //         <div className="col-12 col-md-5 m1">
    //           <h4>Comments</h4>
    //           <ul className="list-unstyled">
    //             {comments.map((comment) => {
    //               return (
    //                 <li key={comment.id}>
    //                   <p> {comment.comment} </p>
    //                   <p>
    //                     {" "}
    //                     -- {comment.author},{" "}
    //                     {new Intl.DateTimeFormat("en-US", {
    //                       year: "numeric",
    //                       month: "short",
    //                       day: "2-digit",
    //                     }).format(new Date(Date.parse(comment.date)))}{" "}
    //                   </p>
    //                 </li>
    //               );
    //             })}
    //           </ul>
    //         </div>
    //       );
    //     else return <div></div>;
    // }

    function RenderComments({comments}) {
        if(comments != null) {
                return(
                    <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                    </div>
                );
        } else {
            return(
                <div></div>
            );
        }   
    }
      
    function RenderDish({ dish }) {
        if (dish) {
          return (
            <div className="row">
              <div className="col-12 col-md-5">
                <Card className="col-12 col-md-12 m-1">
                  <CardImg top width="100%" src={dish?.image} alt={dish?.name} />
                  <CardTitle>{dish?.name}</CardTitle>
                  <CardText>{dish?.description}</CardText>
                </Card>
              </div>
            </div>
          );
        } else {
          return <div></div>;
        }
    }

    const DishDetail = (props) => {
        console.log("rendering.....");

            return (
                <div class="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to={`/menu`}>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comment={props.comment} />
                            <CommentForm/>
                        </div>
                    </div>
                </div>
            )
    }

    export default DishDetail;

// function RenderDish({ dish }) {              //when the dish is selected^, we also want to render the details of the dish
//     //object containing dish^
//     return(
//         <div>
//             <Card>
//                 <CardImg width="100%" object src={dish.image} alt={dish.name} />  
//                 <CardBody>
//                     <CardTitle>{dish.name}</CardTitle>
//                     <CardText>{dish.description}</CardText>
//                 </CardBody>
//             </Card>
//           </div>
//     )
// }
