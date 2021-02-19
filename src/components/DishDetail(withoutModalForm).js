import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, 
        Button, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({ dish }) {              //when the dish is selected^, we also want to render the details of the dish
        //object containing dish^
        return(
            <div>
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />  
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
              </div>
        )
    }

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
    // function RenderComments({ comment }) {
    //     if(comment != null) {
    //         const comment = comment.comments.map((commentArr) => {
    //             return(
    //                 // <div tag="li" className="col-12 mr-3">
    //                 //     <p>{comm.comment}</p>
    //                 //     <p>--{comm.author}, {comm.date}</p>
    //                 // </div>
    //                 <list type="unstyled" className="col-12 mr-3">
    //                     <p>{commentArr.comment}</p>
    //                     <p>--{commentArr.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentArr.date)))}</p>
    //                 </list>
    //             )
    //         })
    //         return (
    //             <div>
    //                 <h1>Comments: </h1>
    //                 <div list>{comment}</div>
    //             </div>
    //         )
    //     } else {
    //         <div></div>
    //     }
    // }

    // function CommentFormComponent({}) {
    //     <Nav className="ml-auto" navbar>        {/*give this left margin, as much as possible*/}
    //         <NavItem>
    //             <Button outline onClick={this.toggleModal}>
    //                 <span className="fa fa-comment-alt fa-lg"></span>Submit Comment
    //             </Button>
    //         </NavItem>
    //     </Nav>
    // }

    const DishDetailEg = (props) => {
        if(props.dish != null) {
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
                        </div>
                    </div>

                </div>
            )
        } else {
            return (
            <div></div>
            );
        }
    }

export default DishDetailEg;