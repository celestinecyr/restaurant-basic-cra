import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         dish:selectedDish
    //     }
    // }
    renderDish(dish) {                          //when the dish is selected^, we also want to render the details of the dish

        if(dish != null) {
            return(
                <Card className="ml-3">
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

    renderComments(dish) {
        if(dish != null) {
            const comment = dish.comments.map((comm) => {
                return(
                    // <div tag="li" className="col-12 mr-3">
                    //     <p>{comm.comment}</p>
                    //     <p>--{comm.author}, {comm.date}</p>
                    // </div>
                    <list type="unstyled" className="col-12 mr-3">
                        <p>{comm.comment}</p>
                        <p>--{comm.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</p>
                    </list>
                )
            })
            return (
                <div>
                    <h1>Comments: </h1>
                    <div list>{comment}</div>
                </div>
            )
        } else {
            <div></div>
        }
    }


    render() {
        if(this.props.dish != null) {
            return (
                <div class="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                        {/* why is it not {this.renderComments(this.props.selectedDish)} */}
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
}

export default DishDetail;