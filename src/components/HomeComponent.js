import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({item}) {         //since this function component is only going to be used here, we can just write the func here
    //RenderCard will receive props ( on line 6 ) and the props will contain just one property which is item
    //so we're just going to extract that item out right within the properties itself.
    //so if we put item here ^ in the para, that item will immediately become available to me for use
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {/* this is where we intro some js code inside our jsx */}
                {/* if item.designation is not null, then we will render that as subtitle, else render as null*/}
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}
function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>


            </div>
        </div>
    );
}

export default Home;